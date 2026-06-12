"use client";

import { useMemo, useState } from "react";
import {
  galleryImages,
  galleryPrimaryCategories,
  type GalleryImage
} from "@/data/mock";
import { Lightbox } from "./Lightbox";

export function GalleryPage() {
  const [activePrimary, setActivePrimary] = useState("全部");
  const [expandedPrimary, setExpandedPrimary] = useState<string | null>(null);
  const [activeSecondary, setActiveSecondary] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const activePrimaryData = galleryPrimaryCategories.find(
    (category) => category.label === activePrimary
  );

  const filteredImages = useMemo(() => {
    return galleryImages.filter((image) => {
      if (activePrimary === "全部") {
        return true;
      }

      if (image.primaryCategory !== activePrimary) {
        return false;
      }

      return activeSecondary ? image.secondaryCategory === activeSecondary : true;
    });
  }, [activePrimary, activeSecondary]);

  const selectPrimary = (label: string) => {
    setActivePrimary(label);
    setExpandedPrimary(label === "全部" ? null : label);
    setActiveSecondary(null);
  };

  return (
    <main className="min-h-screen bg-museum-paper px-5 pb-24 pt-32 text-museum-ink sm:px-8 sm:pt-36">
      <section className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-32 lg:h-[calc(100vh-9rem)] lg:self-start">
          <p className="mb-6 text-[11px] font-bold tracking-[0.24em] text-museum-muted">
            图集
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-none tracking-[0.03em]">
            图集
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-museum-muted">
            所有角色、场景、藏品与世界观碎片，都被安放在这里。
          </p>

          <nav className="mt-9" aria-label="图集分类">
            <div className="space-y-2">
              {galleryPrimaryCategories.map((category) => {
                const isActive = category.label === activePrimary;
                const isExpanded =
                  category.label !== "全部" && category.label === expandedPrimary;

                return (
                  <div key={category.id}>
                    <button
                      type="button"
                      onClick={() => selectPrimary(category.label)}
                      className={`block w-full border-l py-2 pl-4 pr-2 text-left text-sm tracking-[0.16em] transition ${
                        isActive
                          ? "border-museum-ink bg-museum-ink/[0.035] text-museum-ink"
                          : "border-museum-line text-museum-muted hover:border-museum-muted hover:text-museum-ink"
                      }`}
                    >
                      {category.label}
                    </button>

                    {isExpanded && category.secondary.length > 0 ? (
                      <div className="mb-3 mt-1 space-y-1 pl-6">
                        {category.secondary.map((secondary) => {
                          const isSecondaryActive =
                            isActive && activeSecondary === secondary;

                          return (
                            <button
                              key={secondary}
                              type="button"
                              onClick={() => {
                                setActivePrimary(category.label);
                                setExpandedPrimary(category.label);
                                setActiveSecondary(secondary);
                              }}
                              className={`block w-full border-l py-1.5 pl-4 pr-2 text-left text-xs tracking-[0.12em] transition ${
                                isSecondaryActive
                                  ? "border-museum-ink text-museum-ink"
                                  : "border-transparent text-museum-muted/78 hover:border-museum-muted/55 hover:text-museum-ink"
                              }`}
                            >
                              {secondary}
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>
        </aside>

        <section aria-label="图集图片" className="min-w-0">
          <div className="mb-5 flex items-center justify-between border-b border-museum-line/60 pb-3 text-[11px] font-bold tracking-[0.2em] text-museum-muted">
            <span>{activeSecondary ?? activePrimary}</span>
            <span>{String(filteredImages.length).padStart(2, "0")}</span>
          </div>

          <div className="gallery-masonry">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image)}
                className="group mb-5 block w-full break-inside-avoid text-left outline-none sm:mb-6"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full border border-museum-line object-contain shadow-[0_18px_48px_rgba(49,41,34,0.1)] transition duration-300 ease-out group-hover:opacity-90 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-museum-ink"
                />
                {(image.title || image.characterName) ? (
                  <p className="mt-2 flex items-center justify-between gap-3 text-xs leading-5 text-museum-muted">
                    <span>{image.title ?? "未命名作品"}</span>
                    {image.characterName ? <span>{image.characterName}</span> : null}
                  </p>
                ) : null}
              </button>
            ))}
          </div>
        </section>
      </section>

      <Lightbox artwork={activeImage} onClose={() => setActiveImage(null)} />
    </main>
  );
}
