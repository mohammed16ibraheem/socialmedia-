 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { RiWallet3Line } from "react-icons/ri";

type BaseHeroCard = {
  id: string;
  type: "story" | "card";
  title: string;
  subtitle: string;
  position: string;
  chip: string;
  gradient?: string;
};

type StoryHeroCard = BaseHeroCard & {
  type: "story";
  imageSrc: string;
  headline: string;
  profileName: string;
  profileFollowers: string;
  profileImage?: string;
};

type CardHeroCard = BaseHeroCard & {
  type: "card";
  background?: "gradient" | "solid" | "video";
  videoSrc?: string;
  comments?: { id: string; author: string; text: string }[];
};

type HeroCard = StoryHeroCard | CardHeroCard;

const heroCards: HeroCard[] = [
  {
    id: "explore",
    type: "story" as const,
    title: "Explore Moments",
    subtitle: "Vibrant stories from friends worldwide.",
    gradient: "bg-white/0",
    position:
      "-left-8 top-8 h-[430px] w-[250px] -rotate-[10deg] overflow-hidden shadow-[0_30px_90px_rgba(255,114,203,0.28)]",
    chip: "Trending Now",
    imageSrc: "/stories/explore-story.jpg",
    headline: "How to find the perfect lip shade for any occasion",
    profileName: "Scout the City",
    profileFollowers: "56.7k followers",
    profileImage: "/stories/explore-story.jpg",
  },
  {
    id: "connect",
    type: "card" as const,
    background: "video" as const,
    title: "Connect Instantly",
    subtitle: "Start bright conversations that matter.",
    gradient: "bg-[linear-gradient(135deg,#64a8ff,#9059ff)]",
    position:
      "left-1/2 top-1/2 h-[380px] w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-[6deg] shadow-[0_25px_70px_rgba(137,123,255,0.35)]",
    chip: "Live",
    videoSrc: "/media/connect-loop.mp4",
    comments: [
      { id: "c1", author: "Mia", text: "awesome!" },
      { id: "c2", author: "Jay", text: "love this energy" },
      { id: "c3", author: "Zara", text: "best vibes 🔥" },
    ],
  },
  {
    id: "create",
    type: "card" as const,
    background: "gradient" as const,
    title: "Create Together",
    subtitle: "Collaborate on reels, posts, and events.",
    gradient: "bg-[linear-gradient(135deg,#63f5ff,#5dd6ff)]",
    position:
      "right-8 bottom-8 h-[320px] w-[220px] rotate-[18deg] shadow-[0_25px_70px_rgba(99,245,255,0.3)]",
    chip: "✨ New",
  },
];

const featureBadges = [
  {
    id: "anonymous",
    text: "Stay Anonymous",
    position: "left-0 top-1/4",
    gradient: "from-[#ff9dff]/90 to-[#ffd2ff]/80",
  },
  {
    id: "shield",
    text: "Safe Shield",
    position: "right-2 top-8",
    gradient: "from-[#5dd6ff]/90 to-[#a4f7ff]/80",
  },
  {
    id: "limitless",
    text: "No Limits. No Bans.",
    position: "right-12 bottom-20",
    gradient: "from-[#7b6bff]/90 to-[#b2a6ff]/80",
  },
  {
    id: "nft",
    text: "NFT Profile",
    position: "-left-4 bottom-6",
    gradient: "from-[#ffb681]/90 to-[#ffe6c8]/80",
  },
];

const footerLinks = [
  "About",
  "Blog",
  "Jobs",
  "Help",
  "Privacy",
  "Terms",
  "Developers",
  "Attach AI",
  "Contact",
  "Directories",
  "Attach Lite",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#f6f8ff,60%,#eef0ff)] text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between gap-16 px-6 py-12 md:px-12 lg:flex-row">
        <div className="relative hidden flex-1 items-center justify-center lg:flex">
          <div className="relative h-[540px] w-full max-w-[460px]">
            {heroCards.map((card, index) => {
              const isStory = card.type === "story";
              const isVideoCard =
                card.type === "card" && card.background === "video";
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                  className={cn(
                    "absolute overflow-hidden rounded-[40px] text-white",
                    card.position,
                    isStory ? "p-0" : "p-8",
                    !isStory && !isVideoCard && "backdrop-blur-xl",
                    !isStory && !isVideoCard && card.gradient,
                    isVideoCard && "bg-transparent"
                  )}
                >
                  {isStory && card.imageSrc ? (
                    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[40px]">
        <Image
                        src={card.imageSrc}
                        alt={card.title}
                        fill
          priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/30 to-black/85" />
                      <div className="relative flex flex-1 flex-col justify-between p-6">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
                          <span className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-[0.7rem] font-medium">
                            <span className="text-base">🔥</span>
                            {card.chip}
                          </span>
                          <div className="flex items-center gap-1 text-white/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span className="h-1.5 w-24 rounded-full bg-white/25" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold leading-snug text-white">
                          {card.headline}
                        </h3>
                        <div className="flex items-center gap-3 rounded-full bg-white/85 px-3 py-2 text-[#1d1550] shadow-[0_18px_40px_rgba(0,0,0,0.15)] backdrop-blur">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/90">
                            <Image
                              src={card.profileImage ?? card.imageSrc}
                              alt={card.profileName ?? "Attach creator"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col leading-tight">
                            <span className="text-sm font-semibold">
                              {card.profileName}
                            </span>
                            <span className="text-xs text-[#6a6f97]">
                              {card.profileFollowers}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {isVideoCard && card.videoSrc && (
                        <>
                          <video
                            src={card.videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(69,55,205,0.4)_0%,rgba(36,17,115,0.75)_100%)]" />
                        </>
                      )}
                      <div className="relative z-10 flex h-full flex-col">
                        <motion.div
                          initial={{ y: -12 }}
                          animate={{ y: [0, -12, 0] }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                            isVideoCard
                              ? "bg-red-500/90 text-white shadow-[0_10px_25px_rgba(255,91,91,0.35)]"
                              : "bg-white/20"
                          )}
                        >
                          {isVideoCard && (
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="absolute inset-0 rounded-full bg-white/70 opacity-80 blur-[2px]" />
                              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                            </span>
                          )}
                          <span>{card.chip}</span>
                        </motion.div>
                        <h3 className="mt-6 text-2xl font-semibold leading-tight">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-base text-white/85">
                          {card.subtitle}
                        </p>
                        {isVideoCard && card.comments && (
                          <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 space-y-3 text-xs"
                          >
                            {card.comments.map((comment) => (
                              <div
                                key={comment.id}
                                className="flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-white/90 backdrop-blur"
                              >
                                <span className="font-semibold">
                                  {comment.author}
                                </span>
                                <span className="text-white/80">
                                  {comment.text}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                        {isVideoCard ? (
                          <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="mt-auto block text-sm font-medium text-white/85"
                          >
                            Attach keeps your circle close & colorful.
                          </motion.span>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="mt-8 flex flex-col gap-4 text-sm font-medium text-white/80"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur">
                              {index === 0 ? "📸" : "🎬"}
                            </div>
                            <span className="text-sm font-medium text-white/85">
                              Attach keeps your circle close & colorful.
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
            {featureBadges.map((badge, index) => (
              <motion.span
                key={badge.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.12 }}
                className={cn(
                  "absolute inline-flex items-center gap-2 rounded-full bg-linear-to-r px-4 py-2 text-xs font-semibold text-[#1d1550] shadow-[0_12px_32px_rgba(118,108,255,0.18)] backdrop-blur",
                  badge.position,
                  badge.gradient
                )}
              >
                <span className="relative z-10">{badge.text}</span>
              </motion.span>
            ))}
            <motion.div
              className="absolute -bottom-12 right-8 hidden h-14 w-36 items-center justify-center rounded-full bg-white/70 text-sm font-medium text-[#5f3bff] shadow-[0_10px_45px_rgba(111,89,255,0.25)] lg:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Attach Live
            </motion.div>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col items-center gap-6 lg:max-w-md">
          <Card className="w-full border border-[#dfe4ff] bg-white/90 shadow-[0_25px_60px_rgba(102,91,255,0.12)] backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-semibold text-[#20115b]">
                Attach
              </CardTitle>
              <CardDescription className="text-base text-[#5f648c]">
                Your vibrant hub for instant connections and limitless creativity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="identity"
                  className="text-sm font-medium text-[#433d73]"
                >
                  Phone number, username, or email
                </Label>
                <Input
                  id="identity"
                  placeholder="you@attach.social"
                  className="h-12 border-[#cfd6ff] bg-white/95 text-base shadow-[0_4px_16px_rgba(125,118,255,0.12)] focus-visible:border-[#7d76ff] focus-visible:ring-[#7d76ff]/40"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-[#433d73]"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-12 border-[#cfd6ff] bg-white/95 text-base shadow-[0_4px_16px_rgba(125,118,255,0.12)] focus-visible:border-[#7d76ff] focus-visible:ring-[#7d76ff]/40"
                />
              </div>
              <Button className="h-12 w-full rounded-full bg-[#6756ff] text-base font-semibold text-white transition-colors hover:bg-[#5745f5]">
                Log in
              </Button>
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#9aa0c6]">
                <span className="h-px flex-1 bg-linear-to-r from-transparent via-[#ccd2ff] to-transparent" />
                Or
                <span className="h-px flex-1 bg-linear-to-r from-transparent via-[#ccd2ff] to-transparent" />
              </div>
              <Button
                variant="outline"
                className="h-12 w-full rounded-full border-[#ccd2ff] bg-white text-base font-semibold text-[#4058ff] shadow-none transition-colors hover:border-[#b7c0ff] hover:bg-[#eef0ff]"
              >
                <FcGoogle className="text-xl" />
                Continue with Gmail
              </Button>
              <Button
                className="h-12 w-full rounded-full bg-[#1d1550] text-base font-semibold text-white shadow-[0_10px_30px_rgba(51,38,123,0.25)] transition-colors hover:bg-[#2b1f7a]"
              >
                <RiWallet3Line className="text-lg" />
                Connect Web3 Wallet
              </Button>
              <Link
                href="#"
                className="text-center text-sm font-medium text-[#5f6cff] hover:text-[#4654f0]"
              >
                Forgot password?
              </Link>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 text-center text-sm text-[#5f648c]">
              <span>
                Don&apos;t have an account?{" "}
                <Link href="#" className="font-semibold text-[#6756ff]">
                  Sign up
                </Link>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#9aa0c6]">
                Built for creators, communities & personal moments
              </span>
            </CardFooter>
          </Card>

          <div className="flex w-full flex-col items-center gap-4 rounded-3xl border border-transparent bg-white/70 p-6 text-center shadow-[0_18px_50px_rgba(123,110,255,0.08)] backdrop-blur">
            <p className="text-base font-medium text-[#433d73]">
              Get the Attach app to share in full color.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button className="inline-flex items-center gap-2 rounded-full bg-[#20115b] px-6 text-white hover:bg-[#2b1f7a]">
                <FaApple className="text-xl" />
                App Store
              </Button>
              <Button className="inline-flex items-center gap-2 rounded-full bg-[#5f3bff] px-6 text-white hover:bg-[#4c2cd6]">
                <SiGoogleplay className="text-lg" />
                Play Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 pb-10 text-xs text-[#7d82a8]">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          {footerLinks.map((link) => (
            <Link key={link} href="#" className="hover:text-[#5f6cff]">
              {link}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span>English</span>
          <span>© {new Date().getFullYear()} Attach</span>
        </div>
      </footer>
    </div>
  );
}
