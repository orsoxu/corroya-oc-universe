"use client";

import Link from "next/link";

// Toggle this front-end-only state to preview signed-out or signed-in navigation.
const isLoggedIn = true;

const guestLinks = [
  { href: "/plaza", label: "广场" },
  { href: "/", label: "登录" }
];

const memberLinks = [
  { href: "/#worldview", label: "世界观" },
  { href: "/characters", label: "角色集" },
  { href: "/gallery", label: "图集" },
  { href: "/curate", label: "布展" }
];

export function SiteHeader() {
  const links = isLoggedIn ? memberLinks : guestLinks;

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] border-b border-museum-line/40 bg-museum-paper/78 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-museum-ink backdrop-blur-md sm:px-8 sm:py-5">
      <div className="grid grid-cols-2 items-center gap-y-3 sm:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start whitespace-nowrap">
          OC MUSEUM
        </Link>

        <Link
          href="/"
          className="order-3 col-span-2 justify-self-center text-center font-display text-lg font-medium normal-case tracking-[0.2em] sm:order-none sm:col-span-1 sm:text-2xl sm:tracking-[0.42em]"
          aria-label="Corroya's OC Universe home"
        >
          Corroya&apos;s OC Universe
        </Link>

        <nav className="flex min-w-0 items-center justify-end gap-3 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition hover:text-museum-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
