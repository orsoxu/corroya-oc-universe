"use client";

import { useState } from "react";

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="bg-museum-paper px-5 py-8 text-museum-ink sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-museum-line pt-6">
        <div className="flex items-center gap-3">
          <svg
            aria-hidden="true"
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 21h16" />
            <path d="M6 21V9l6-4 6 4v12" />
            <path d="M9 21v-7h6v7" />
            <path d="M9 10h.01" />
            <path d="M12 9h.01" />
            <path d="M15 10h.01" />
          </svg>
          <span className="text-[11px] font-bold tracking-[0.22em]">OC MUSEUM</span>
        </div>

        <button
          type="button"
          onClick={copyLink}
          className="relative flex size-11 items-center justify-center text-museum-ink transition hover:text-museum-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-museum-ink"
          aria-label="复制当前页面链接"
        >
          <svg
            aria-hidden="true"
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7" />
            <path d="M9 7h8v8" />
            <path d="M5 11v8h8" />
          </svg>
          <span
            className={`absolute right-0 top-[-1.7rem] whitespace-nowrap text-[11px] font-bold tracking-[0.12em] text-museum-muted transition ${
              copied ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            链接已复制
          </span>
        </button>
      </div>
    </footer>
  );
}
