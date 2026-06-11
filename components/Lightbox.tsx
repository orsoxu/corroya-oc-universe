"use client";

import type { Artwork } from "@/data/mock";

type LightboxProps = {
  artwork: Artwork | null;
  onClose: () => void;
};

export function Lightbox({ artwork, onClose }: LightboxProps) {
  if (!artwork) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1b16]/82 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${artwork.title} 大图`}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="关闭大图"
        onClick={onClose}
        className="absolute right-4 top-4 grid size-11 place-items-center border border-[#e6dfd5]/45 text-[#e6dfd5] transition hover:bg-[#e6dfd5] hover:text-[#1f1b16] sm:right-8 sm:top-8"
      >
        <span className="text-xl leading-none" aria-hidden="true">
          ×
        </span>
      </button>
      <figure
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={artwork.src}
          alt={artwork.alt}
          className="max-h-[78vh] w-full object-contain shadow-print"
        />
        <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-[#e6dfd5]">
          <span className="font-display text-2xl">{artwork.title}</span>
          <span className="text-right text-[11px] font-bold uppercase tracking-[0.18em] opacity-75">
            {artwork.arc} · {artwork.year}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
