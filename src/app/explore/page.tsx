"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FiPlayCircle, FiSearch } from "react-icons/fi";

import MainNav from "@/components/navigation/main-nav";

type ExploreMedia = {
  id: string;
  clientId?: string;
  type: "photo" | "video";
  src: string;
  alt: string;
  creator: string;
  link: string;
  videoUrl?: string;
  aspectRatio?: string;
};

export default function ExplorePage() {
  const [items, setItems] = useState<ExploreMedia[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef(1);
  const prefetchingRef = useRef(false);
  const hasMoreRef = useRef(true);

  const loadItems = useCallback(async () => {
    if (loading || !hasMoreRef.current) return;
    setLoading(true);
    setError(null);

    const currentPage = pageRef.current;
    const requestQuery = activeQuery;

    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        photos: "16",
        videos: "8",
      });
      if (activeQuery) {
        params.set("query", activeQuery);
      }

      const response = await fetch(`/api/pexels?${params.toString()}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to load explore feed.");
      }

      const data = (await response.json()) as {
        items: ExploreMedia[];
        hasMore: boolean;
      };

      if (requestQuery !== activeQuery) {
        return;
      }

      const enrichedItems = (data.items ?? []).map((item, index) => ({
        ...item,
        clientId: `${item.id}-${currentPage}-${Date.now()}-${index}`,
      }));

      setItems((prev) => [...prev, ...enrichedItems]);
      const more = Boolean(data.hasMore);
      setHasMore(more);
      hasMoreRef.current = more;
      pageRef.current = currentPage + 1;
      prefetchingRef.current = false;
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Something went wrong fetching explore content."
      );
    } finally {
      if (requestQuery !== activeQuery) {
        return;
      }
      setLoading(false);
    }
  }, [loading, activeQuery]);

  useEffect(() => {
    setItems([]);
    pageRef.current = 1;
    setHasMore(true);
    hasMoreRef.current = true;
    setError(null);
    prefetchingRef.current = false;

    loadItems().then(() => {
      if (hasMoreRef.current && !prefetchingRef.current) {
        prefetchingRef.current = true;
        loadItems();
      }
    });
  }, [activeQuery, loadItems]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMoreRef.current) {
          loadItems().then(() => {
            if (hasMoreRef.current && !prefetchingRef.current) {
              prefetchingRef.current = true;
              loadItems();
            }
          });
        }
      },
      { rootMargin: "800px 0px" }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [loadItems, hasMore]);

  const gridItems = useMemo(() => items, [items]);

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]">
      <header className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pt-10 pb-8">
        <form
          className="relative overflow-hidden rounded-full border border-[#dfe4ff] bg-white/80 shadow-[0_15px_40px_rgba(116,107,255,0.15)] backdrop-blur"
          onSubmit={(event) => {
            event.preventDefault();
            setActiveQuery(searchInput.trim());
          }}
        >
          <input
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search creators, hashtags, audio, places…"
            className="h-14 w-full rounded-full bg-transparent px-6 pr-24 text-sm text-[#4b4f7a] outline-none placeholder:text-[#9aa0c6]"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex h-full w-14 items-center justify-center text-[#6756ff] transition hover:text-[#4a3cc4]"
            aria-label="Search"
          >
            <FiSearch className="text-xl" />
          </button>
        </form>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-32">
        {error ? (
          <div className="flex min-h-[200px] items-center justify-center rounded-3xl border border-[#e4e8ff] bg-white/80 p-10 text-center text-sm font-medium text-[#844] shadow-[0_20px_70px_rgba(92,75,213,0.12)]">
            <p>{error}</p>
          </div>
        ) : (
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {gridItems.map((item) => {
              const aspectStyle = item.aspectRatio
                ? { aspectRatio: item.aspectRatio }
                : undefined;

              const media =
                item.type === "video" && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    poster={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                );

              return (
                <div
                  key={item.clientId ?? item.id}
                  className="group relative mb-4 overflow-hidden rounded-[28px] border border-[#e4e8ff] bg-white/80 shadow-[0_12px_40px_rgba(104,94,255,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(94,82,245,0.18)] break-inside-avoid"
                >
                  <div
                    className="relative w-full overflow-hidden"
                    style={aspectStyle}
                  >
                    {media}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(23,19,65,0.05)_0%,rgba(27,23,76,0.4)_100%)] opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-black/45 px-3 py-1 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <span className="truncate font-medium">{item.creator}</span>
                    {item.type === "video" && (
                      <span className="inline-flex items-center gap-1 text-white">
                        <FiPlayCircle className="text-sm" />
                        Video
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
            {loading &&
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`explore-skeleton-${index}`}
                  className="mb-4 h-60 animate-pulse break-inside-avoid rounded-[28px] border border-[#e4e8ff] bg-white/60"
                />
              ))}
          </div>
        )}
        <div ref={sentinelRef} className="h-10 w-full" />
      </main>

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 px-6">
        <MainNav />
      </div>
    </div>
  );
}

