"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiBell, FiGlobe, FiHome, FiMail, FiUpload, FiUser } from "react-icons/fi";

const primaryNavItems = [
  {
    href: "/home",
    label: "Home",
    icon: FiHome,
  },
  {
    href: "/explore",
    label: "Explore",
    icon: FiGlobe,
    animated: true,
  },
  {
    href: "/upload",
    label: "Upload",
    icon: FiUpload,
  },
  {
    href: "/messages",
    label: "Messages",
    icon: FiMail,
  },
  {
    href: "/notifications",
    label: "Notifications",
    icon: FiBell,
    disabled: true,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: FiUser,
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-6 z-50 mx-auto flex w-full max-w-3xl items-center justify-around rounded-full border border-white/40 bg-white/20 px-4 py-3 text-sm font-medium text-[#5f648c] shadow-[0_18px_55px_rgba(45,37,120,0.16)] backdrop-blur-2xl">
      {primaryNavItems.map(
        ({ href, label, icon: Icon, disabled, avatar, animated }) => {
        const isActive =
          pathname === href || (href !== "/" && pathname?.startsWith(href));
          const iconClass = `text-lg ${
            isActive ? "text-[#6756ff]" : "text-current"
          }`;

        const content = (
          <span
            className={`inline-flex flex-col items-center gap-1 transition ${
              isActive
                ? "text-[#20115b]"
                : disabled
                ? "cursor-not-allowed text-[#9aa0c6]"
                : "text-[#5f648c] hover:text-[#20115b]"
            }`}
          >
            <span
              className={`flex items-center justify-center rounded-full border border-transparent transition ${
                isActive
                  ? "border-[#6756ff]/40 bg-[#6756ff]/20"
                  : "bg-white/70"
              } ${avatar ? "p-0.5" : "p-2.5"}`}
            >
              {avatar ? (
                <span className="relative block size-9 overflow-hidden rounded-full border border-white/70">
                  <Image
                    src={avatar}
                    alt="Profile avatar"
                    fill
                    sizes="36px"
                    className="object-cover"
                    priority
                  />
                </span>
              ) : animated ? (
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className={`${iconClass} text-2xl`} />
                </motion.span>
              ) : (
                <Icon className={`${iconClass} text-2xl`} />
              )}
            </span>
          </span>
        );

          if (disabled) {
            return (
              <span key={label} className="opacity-75" aria-disabled="true">
                {content}
              </span>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              aria-current={isActive ? "page" : false}
            >
              {content}
            </Link>
          );
        }
      )}
    </nav>
  );
}

export default MainNav;

