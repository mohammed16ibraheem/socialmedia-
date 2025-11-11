"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMoreHorizontal, FiHeart, FiMessageCircle } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainNav from "@/components/navigation/main-nav";

const stories = [
  {
    id: "s1",
    username: "you",
    label: "Your Story",
    image:
      "https://images.unsplash.com/photo-1521579774571-0d88adf29d19?auto=format&fit=crop&w=400&q=80",
    isLive: true,
  },
  {
    id: "s2",
    username: "sofia",
    label: "sofia.b",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "s3",
    username: "jordan",
    label: "jordan",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "s4",
    username: "luna",
    label: "lunalens",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "s5",
    username: "chef",
    label: "chef.toni",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
];

const feedPosts = [
  {
    id: "p1",
    author: "Lena Ortiz",
    handle: "@lenatravels",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    location: "Lisbon, Portugal",
    media:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    caption:
      "Chasing auroras with the best crew 💫 Nothing beats this midnight glow.",
    likes: "3,421",
    comments: 182,
  },
  {
    id: "p2",
    author: "Noah Brooks",
    handle: "@cityframe",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    location: "Chicago, USA",
    media:
      "https://images.unsplash.com/photo-1529429617124-aee0090f0f9c?auto=format&fit=crop&w=900&q=80",
    caption: "Curve study at dawn. Architecture is poetry in slow motion.",
    likes: "7,540",
    comments: 340,
  },
];

export default function HomeFeedPage() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 pt-10 pb-6">
        <Link
          href="/profile"
          className="rounded-full border border-[#dfe4ff] bg-white/80 px-4 py-2 text-sm font-semibold text-[#20115b] shadow-sm transition hover:bg-[#f5f6ff]"
        >
          My Profile
        </Link>
        <div className="rounded-full border border-[#e4e8ff] bg-white/70 px-4 py-2 text-sm text-[#5f648c] shadow-sm backdrop-blur">
          Following • For you
        </div>
        <Link
          href="/explore"
          className="rounded-full border border-[#e4e8ff] bg-white/80 px-4 py-2 text-sm font-semibold text-[#6756ff] shadow-sm transition hover:bg-[#f1f3ff]"
        >
          Explore
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 pb-28">
        <section className="flex gap-4 overflow-x-auto pb-2">
          {stories.map((story) => (
            <button
              key={story.id}
              className="group relative flex w-20 flex-col items-center gap-2"
            >
              <span
                className={`relative flex size-20 items-center justify-center rounded-full border-2 border-transparent p-1 transition ${
                  story.isLive
                    ? "border-[#f55989] shadow-[0_10px_28px_rgba(245,89,137,0.25)]"
                    : ""
                }`}
              >
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#6f5cff,#8d77ff)] opacity-0 transition group-hover:opacity-100" />
                <span className="relative block size-full overflow-hidden rounded-full border border-white/80 shadow">
                  <Image
                    src={`${story.image}&auto=format&fit=crop&w=240&q=80`}
                    alt={story.label}
                    fill
                    className="object-cover"
                  />
                </span>
              </span>
              <span className="text-xs font-medium text-[#5f648c]">
                {story.label}
              </span>
            </button>
          ))}
        </section>

        <section className="space-y-8">
          {feedPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border border-[#e4e8ff] bg-white/90 shadow-[0_25px_70px_rgba(92,75,213,0.12)] backdrop-blur"
            >
              <CardContent className="flex flex-col gap-5 p-0">
                <header className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative size-12 overflow-hidden rounded-full border border-white shadow">
                      <Image
                        src={post.avatar}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#20115b]">
                        {post.author}
                      </p>
                      <p className="text-xs text-[#7d82a8]">
                        {post.location} • 2h ago
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-full p-2 text-[#9aa0c6] transition hover:text-[#20115b]"
                  >
                    <FiMoreHorizontal className="text-xl" />
                  </button>
                </header>

                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={post.media}
                    alt={post.caption}
                    fill
                    className="object-cover"
                  />
                </div>

                <footer className="flex flex-col gap-4 px-6 pb-5">
                  <div className="flex items-center gap-3 text-[#5f648c]">
                    <button className="rounded-full border border-[#e4e8ff] bg-white/80 px-4 py-2 text-sm font-semibold text-[#20115b] shadow-sm transition hover:bg-[#f4f5ff]">
                      <span className="inline-flex items-center gap-2">
                        <FiHeart className="text-base text-[#f55989]" />
                        {post.likes} likes
                      </span>
                    </button>
                    <span className="inline-flex items-center gap-2 text-sm text-[#7d82a8]">
                      <FiMessageCircle className="text-base" />
                      {post.comments} comments
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4b4f7a]">
                    <span className="font-semibold text-[#20115b]">
                      {post.author}
                    </span>{" "}
                    {post.caption}
                  </p>
                  <Button
                    variant="ghost"
                    className="self-start rounded-full border border-transparent px-0 text-sm font-semibold text-[#6756ff] hover:text-[#4a3cc4]"
                  >
                    View all comments
                  </Button>
                </footer>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <div className="pointer-events-none absolute inset-x-0 bottom-28 mx-auto h-52 w-full max-w-4xl rounded-full bg-[radial-gradient(circle,#7d76ff20,transparent_70%)]" />

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 px-6">
        <MainNav />
      </div>
    </div>
  );
}

