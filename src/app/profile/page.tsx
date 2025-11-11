"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiThumbsDown,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const profileStats = [
  { id: "followers", label: "Followers", value: "1k" },
  { id: "following", label: "Following", value: "342" },
  { id: "posts", label: "Posts", value: "250" },
];

const galleryItems = [
  {
    id: "sunrise",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Sunrise over layered mountains",
    title: "Golden Summit Glow",
    user: {
      name: "Lena Ortiz",
      handle: "@lenatravels",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    stats: { likes: "3.1k", comments: "214", shares: "98" },
    comments: [
      {
        id: "c1",
        author: "Mila",
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
        text: "This sunrise feels magical!",
      },
    ],
  },
  {
    id: "neon-city",
    src: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    alt: "Neon lights in a cyberpunk-style city",
    title: "Neon Nightscape",
    user: {
      name: "Ravi Patel",
      handle: "@ravinights",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    stats: { likes: "5.6k", comments: "612", shares: "340" },
    comments: [
      {
        id: "c2",
        author: "Akira",
        avatar: "https://randomuser.me/api/portraits/women/52.jpg",
        text: "Cyber vibes on point 🔥",
      },
    ],
  },
  {
    id: "winter-street",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    alt: "Snowy evening with city tram",
    title: "Winter Commute",
    user: {
      name: "Kai Rivers",
      handle: "@kai.snap",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    stats: { likes: "1.9k", comments: "98", shares: "54" },
    comments: [
      {
        id: "c3",
        author: "Nora",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Feels like a movie scene 💙",
      },
    ],
  },
  {
    id: "ocean-dive",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Diver exploring underwater reef",
    title: "Deep Blue Drift",
    user: {
      name: "Hannah Lee",
      handle: "@hannahdives",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    stats: { likes: "4.8k", comments: "340", shares: "152" },
    comments: [
      {
        id: "c4",
        author: "Owen",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        text: "Need to add this to my bucket list!",
      },
    ],
  },
  {
    id: "art-museum",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
    alt: "Minimalist museum interior",
    title: "Gallery Whisper",
    user: {
      name: "Marta Quinn",
      handle: "@martasketch",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    stats: { likes: "2.2k", comments: "156", shares: "63" },
    comments: [
      {
        id: "c5",
        author: "Leo",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        text: "Those lines are so calming.",
      },
    ],
  },
  {
    id: "festival-powder",
    src: "https://images.unsplash.com/photo-1508175800971-6bfe1057f629",
    alt: "Color powder celebration",
    title: "Colorburst Moment",
    user: {
      name: "Sonia Ray",
      handle: "@soniashows",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    stats: { likes: "7.4k", comments: "812", shares: "501" },
    comments: [
      {
        id: "c6",
        author: "Dana",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        text: "I can almost feel the energy!",
      },
    ],
  },
  {
    id: "aurora",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    alt: "Aurora borealis above snowy mountains",
    title: "Polar Lightscape",
    user: {
      name: "Oskar Lind",
      handle: "@oskarroams",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    stats: { likes: "6.3k", comments: "455", shares: "287" },
    comments: [
      {
        id: "c7",
        author: "Freya",
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        text: "Northern lights goals ✨",
      },
    ],
  },
  {
    id: "desert-trail",
    src: "https://images.unsplash.com/photo-1500534311580-87394c659309",
    alt: "Traveler walking through desert dunes",
    title: "Dune Wanderlust",
    user: {
      name: "Eli Turner",
      handle: "@trail.eli",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    stats: { likes: "2.9k", comments: "202", shares: "111" },
    comments: [
      {
        id: "c8",
        author: "Sahar",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        text: "Desert walks hit different.",
      },
    ],
  },
  {
    id: "abstract-architecture",
    src: "https://images.unsplash.com/photo-1529429617124-aee0090f0f9c",
    alt: "Abstract architecture with sweeping curves",
    title: "Skyline Rhythm",
    user: {
      name: "Noah Brooks",
      handle: "@cityframe",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    stats: { likes: "3.7k", comments: "180", shares: "140" },
    comments: [
      {
        id: "c9",
        author: "Iris",
        avatar: "https://randomuser.me/api/portraits/women/37.jpg",
        text: "Obsessed with this perspective.",
      },
    ],
  },
  {
    id: "forest-mist",
    src: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    alt: "Misty morning in a forest",
    title: "Evergreen Haze",
    user: {
      name: "Jun Park",
      handle: "@jun.outdoors",
      avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    stats: { likes: "4.1k", comments: "244", shares: "173" },
    comments: [
      {
        id: "c10",
        author: "Mae",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        text: "Foggy mornings are my fave.",
      },
    ],
  },
];

const profileTabs = ["All", "Photos", "Videos"] as const;

export default function ProfilePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]">
      <div className="pointer-events-none absolute inset-x-0 -top-36 mx-auto h-[320px] max-w-5xl rounded-full bg-[radial-gradient(circle,#7d76ff20,transparent_70%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-10">
        <header className="relative overflow-hidden rounded-[48px] border border-[#dfe4ff] bg-white/85 shadow-[0_30px_80px_rgba(102,91,255,0.18)] backdrop-blur-xl">
          <div className="relative h-[240px] bg-[#8ca2ff]">
            <Image
              src="https://images.unsplash.com/photo-1526481280695-3c469c042f27"
              alt="Abstract color waves"
              fill
              priority
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(52,37,197,0.45)_0%,rgba(35,18,131,0.65)_100%)]" />

            <div className="absolute inset-x-0 top-6 flex items-center justify-between px-6">
              <Link
                href="#"
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/85 text-[#20115b] shadow-[0_12px_30px_rgba(55,38,123,0.18)] transition hover:bg-white"
                aria-label="Back to feed"
              >
                ←
              </Link>
              <button
                type="button"
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/85 text-[#20115b] shadow-[0_12px_30px_rgba(55,38,123,0.18)] transition hover:bg-white"
                aria-label="Open inbox"
              >
                ✉️
              </button>
            </div>
          </div>

          <div className="relative z-10 -mt-20 px-6 pb-10 sm:px-10 lg:px-14">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-[6px] border-white shadow-[0_25px_60px_rgba(54,43,153,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                  alt="Catherine Rivera profile"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-12 text-[#20115b]">
                {profileStats.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center">
                    <span className="text-2xl font-semibold">{stat.value}</span>
                    <span className="text-sm font-medium text-[#5f648c]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-[#20115b]">
                  @Catherine12
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-[#5f648c] sm:text-base">
                  My name is Catherine. I like dancing in the rain and travelling
                  all around the world.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button className="h-12 rounded-full bg-[linear-gradient(135deg,#6f5cff,#8d77ff)] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(111,92,255,0.25)] transition hover:brightness-105">
                  Follow
                </Button>
                <Button className="h-12 rounded-full bg-white px-8 text-base font-semibold text-[#20115b] shadow-[0_18px_40px_rgba(72,59,177,0.18)] transition hover:bg-[#f1f3ff]">
                  Message
                </Button>
              </div>
            </div>
          </div>
        </header>

        <Card className="border-[#dfe4ff] bg-white/80 shadow-[0_25px_70px_rgba(92,75,213,0.12)] backdrop-blur-xl">
          <CardContent className="space-y-10 p-6 sm:p-10">
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#7d82a8]">
              {profileTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={cn(
                    "relative pb-2 transition",
                    index === 0
                      ? "text-[#20115b]"
                      : "hover:text-[#20115b]/80"
                  )}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  {tab}
                  {index === 0 && (
                    <motion.span
                      layoutId="profile-tab-indicator"
                      className="absolute inset-x-0 -bottom-1 mx-auto h-1 w-8 rounded-full bg-[linear-gradient(135deg,#6756ff,#8c76ff)]"
                    />
                  )}
                </button>
              ))}
            </nav>

            <MasonryGallery items={galleryItems} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MasonryGallery({ items }: { items: typeof galleryItems }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
      {items.map((item) => (
        <article
          key={item.id}
          className="group mb-4 break-inside-avoid overflow-hidden rounded-[28px] border border-[#e4e8ff] bg-white/90 shadow-[0_18px_40px_rgba(92,75,213,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(92,75,213,0.16)]"
        >
          <div className="relative h-[240px] sm:h-[280px]">
            <Image
              src={`${item.src}?auto=format&fit=crop&w=900&q=80`}
              alt={item.alt}
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(36,24,102,0.32))] opacity-0 transition group-hover:opacity-100" />
            <div className="absolute inset-x-5 top-5 flex items-center justify-between text-white drop-shadow">
              <div className="flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full border-2 border-white/80 shadow-md">
                  <Image
                    src={item.user.avatar}
                    alt={item.user.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{item.user.name}</p>
                  <p className="text-xs text-white/80">{item.user.handle}</p>
                </div>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                Featured
              </span>
            </div>
          </div>
          <div className="space-y-2 px-5 pb-5 pt-4">
            <h3 className="text-base font-semibold text-[#20115b]">
              {item.title}
            </h3>
            <p className="text-sm text-[#6a6f97]">
              {item.alt}
            </p>
            <div className="flex items-center justify-between pt-4 text-sm text-[#5f648c]">
              <ActionPill icon={<FiHeart />} label={item.stats.likes} />
              <ActionPill icon={<FiThumbsDown />} label="42" />
              <ActionPill icon={<FiMessageCircle />} label={item.stats.comments} />
              <ActionPill icon={<FiShare2 />} label={item.stats.shares} />
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-[#f1f3ff] px-4 py-3 text-sm">
              <div className="relative size-9 overflow-hidden rounded-full border border-white/60 shadow">
                <Image
                  src={item.comments[0].avatar}
                  alt={item.comments[0].author}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1 text-left">
                <p className="font-semibold text-[#20115b]">
                  {item.comments[0].author}
                </p>
                <p className="text-[#6a6f97]">{item.comments[0].text}</p>
              </div>
              <button
                type="button"
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#6756ff] shadow-sm transition hover:bg-[#e8eaff]"
              >
                Reply
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ActionPill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-[#eef0ff] px-4 py-2 text-xs font-semibold text-[#443b7e] shadow-sm transition hover:bg-[#e0e4ff]"
    >
      <span className="text-base text-[#6756ff]">{icon}</span>
      {label}
    </button>
  );
}

