"use client";

import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";

import MainNav from "@/components/navigation/main-nav";

const exploreItems = [
  {
    id: "e1",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Sunrise silhouette",
    type: "photo",
  },
  {
    id: "e2",
    src: "https://images.unsplash.com/photo-1529429617124-aee0090f0f9c",
    alt: "Modern architecture",
    type: "photo",
  },
  {
    id: "e3",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    alt: "Aurora borealis",
    type: "video",
  },
  {
    id: "e4",
    src: "https://images.unsplash.com/photo-1500534311580-87394c659309",
    alt: "Traveler in desert",
    type: "photo",
  },
  {
    id: "e5",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Diver underwater",
    type: "video",
  },
  {
    id: "e6",
    src: "https://images.unsplash.com/photo-1508175800971-6bfe1057f629",
    alt: "Color festival",
    type: "photo",
  },
  {
    id: "e7",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    alt: "Winter evening tram",
    type: "video",
  },
  {
    id: "e8",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
    alt: "Museum interior",
    type: "photo",
  },
  {
    id: "e9",
    src: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    alt: "Misty forest",
    type: "photo",
  },
  {
    id: "e10",
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    alt: "Portrait with colors",
    type: "photo",
  },
  {
    id: "e11",
    src: "https://images.unsplash.com/photo-1456327102063-fb5054efe647",
    alt: "City lights at night",
    type: "video",
  },
  {
    id: "e12",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    alt: "Chef plating dish",
    type: "photo",
  },
];

const layoutSpans = [
  "col-span-2 row-span-2",
  "row-span-1",
  "row-span-1",
  "col-span-1 row-span-2",
  "row-span-1",
  "row-span-1",
  "col-span-2 row-span-1",
  "row-span-1",
  "row-span-1",
  "row-span-1",
  "row-span-1",
  "col-span-2 row-span-1",
];

export default function ExplorePage() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]">
      <header className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pt-10 pb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#20115b]">
            Discover creators
          </h1>
          <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7d82a8] shadow-sm">
            Explore
          </span>
        </div>
        <div className="relative overflow-hidden rounded-full border border-[#dfe4ff] bg-white/80 shadow-[0_15px_40px_rgba(116,107,255,0.15)] backdrop-blur">
          <input
            type="search"
            placeholder="Search creators, hashtags, audio, places…"
            className="h-14 w-full rounded-full bg-transparent px-6 pr-24 text-sm text-[#4b4f7a] outline-none placeholder:text-[#9aa0c6]"
          />
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#6756ff]">
            <FiSearch className="text-xl" />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-32">
        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3 lg:auto-rows-[260px] lg:grid-cols-4">
          {exploreItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-[28px] border border-[#e4e8ff] bg-white/80 shadow-[0_12px_40px_rgba(104,94,255,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(94,82,245,0.18)] ${layoutSpans[index] ?? ""}`}
            >
              <Image
                src={`${item.src}?auto=format&fit=crop&w=900&q=80`}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,19,65,0.05)_0%,rgba(27,23,76,0.4)_100%)] opacity-0 transition group-hover:opacity-100" />
              {item.type === "video" && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white shadow">
                  <FiPlayCircle className="text-base" />
                  Reels
                </span>
              )}
            </article>
          ))}
        </div>
      </main>

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 px-6">
        <MainNav />
      </div>
    </div>
  );
}

