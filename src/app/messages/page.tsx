"use client";

import { FiMail } from "react-icons/fi";

import MainNav from "@/components/navigation/main-nav";

export default function MessagesPage() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]">
      <header className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 pt-16 pb-8 text-center text-[#20115b]">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#6756ff] shadow-[0_15px_40px_rgba(118,108,255,0.2)]">
          <FiMail className="text-2xl" />
        </span>
        <h1 className="text-2xl font-semibold">Messages coming soon</h1>
        <p className="max-w-xl text-sm text-[#5f648c]">
          Direct messages will live here. We’re still wiring up the inbox
          experience.
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 pb-32">
        <div className="w-full rounded-3xl border border-[#e4e8ff] bg-white/80 p-10 text-center text-sm text-[#7d82a8] shadow-[0_20px_70px_rgba(92,75,213,0.12)] backdrop-blur">
          <p>
            In the finished app, you’ll be able to view threads, reply with
            text, voice notes, and share posts straight from here.
          </p>
        </div>
      </main>

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 px-6">
        <MainNav />
      </div>
    </div>
  );
}

