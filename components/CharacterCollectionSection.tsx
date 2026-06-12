"use client";

import { useState } from "react";
import { characterGalleries, type CharacterGalleryImage } from "@/data/mock";

export function CharacterCollectionSection() {
  const [activeId, setActiveId] = useState(characterGalleries[0]?.id ?? "");
  const [activeImage, setActiveImage] = useState<CharacterGalleryImage | null>(null);
  const activeCharacter =
    characterGalleries.find((character) => character.id === activeId) ?? characterGalleries[0];

  return (
    <section
      id="characters-collection"
      className="min-h-screen bg-museum-paper px-5 py-[clamp(7rem,14vh,10rem)] text-museum-ink sm:px-8"
      aria-label="角色集"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(220px,0.34fr)_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-7 text-[11px] font-bold tracking-[0.24em] text-museum-muted">
            角色集
          </p>

          <div className="flex gap-3 overflow-x-auto pb-3 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
            {characterGalleries.map((character) => {
              const isActive = character.id === activeCharacter.id;

              return (
                <button
                  key={character.id}
                  type="button"
                  onClick={() => setActiveId(character.id)}
                  className={`shrink-0 whitespace-nowrap border-b px-1 pb-2 text-left font-display text-3xl leading-none transition lg:block lg:w-full lg:border-b-0 lg:border-l lg:py-3 lg:pl-5 lg:pr-0 lg:text-5xl ${
                    isActive
                      ? "border-museum-ink text-museum-ink"
                      : "border-museum-line text-museum-muted hover:border-museum-muted hover:text-museum-ink"
                  }`}
                >
                  {character.name}
                </button>
              );
            })}
          </div>

          <p className="mt-7 hidden max-w-xs text-sm leading-7 text-museum-muted lg:block">
            {activeCharacter.summary}
          </p>
        </aside>

        <div>
          <div className="mb-7 lg:hidden">
            <p className="text-sm leading-7 text-museum-muted">{activeCharacter.summary}</p>
          </div>

          <div className="character-masonry">
            {activeCharacter.images.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image)}
                className="mb-5 block w-full break-inside-avoid text-left outline-none sm:mb-6"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full border border-museum-line object-contain transition duration-300 ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-museum-ink"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1b16]/82 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="角色图片大图"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="关闭大图"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center border border-[#e6dfd5]/45 text-[#e6dfd5] transition hover:bg-[#e6dfd5] hover:text-[#1f1b16] sm:right-8 sm:top-8"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              ×
            </span>
          </button>

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            width={activeImage.width}
            height={activeImage.height}
            className="max-h-[82vh] max-w-[92vw] object-contain shadow-print"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
