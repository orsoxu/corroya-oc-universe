"use client";

export type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
  arc?: string;
  year?: string;
};

type LightboxProps = {
  artwork: LightboxImage | null;
  onClose: () => void;
};

export function Lightbox({ artwork, onClose }: LightboxProps) {
  if (!artwork) {
    return null;
  }

  const title = artwork.title?.trim() || "未命名作品";
  const meta = [artwork.arc, artwork.year].filter(Boolean).join(" · ");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1b16]/82 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 大图`}
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
          <span className="text-card-title text-[#e6dfd5]">{title}</span>
          {meta ? (
            <span className="text-right text-ui-label uppercase opacity-75">
              {meta}
            </span>
          ) : null}
        </figcaption>
      </figure>
    </div>
  );
}
