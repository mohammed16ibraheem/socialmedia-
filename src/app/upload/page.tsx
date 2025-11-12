"use client";

import { FiUpload } from "react-icons/fi";

import MainNav from "@/components/navigation/main-nav";

export default function UploadPage() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]">
      <div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[260px] max-w-4xl rounded-full bg-[radial-gradient(circle,#7d76ff20,transparent_70%)]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 pb-32 pt-16 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-[#6756ff] shadow-[0_18px_50px_rgba(116,107,255,0.22)]">
          <FiUpload className="text-2xl" />
        </span>
        <h1 className="text-3xl font-semibold text-[#20115b]">Creator uploads coming soon</h1>
        <p className="max-w-xl text-base text-[#5f648c]">
          Soon you’ll be able to upload photos, reels, and carousel posts directly from Attach.
          We’re polishing the creation flow—stay tuned!
        </p>
      </main>

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 px-6">
        <MainNav />
      </div>
    </div>
  );
}

