"use client";

import { useCallback, useRef, useState } from "react";
import { artworks, type Artwork } from "@/data/mock";
import { Lightbox } from "./Lightbox";

type Point = {
  x: number;
  y: number;
};

export function DraggableCanvas() {
  const [offsetX, setOffsetX] = useState(0);
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<Point | null>(null);
  const originX = useRef(0);
  const moved = useRef(false);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      dragStart.current = { x: event.clientX, y: event.clientY };
      originX.current = offsetX;
      moved.current = false;
      setDragging(true);
    },
    [offsetX]
  );

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) {
      return;
    }

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;

    if (Math.abs(deltaX) > 4) {
      moved.current = true;
    }

    setOffsetX(originX.current + deltaX);
  }, []);

  const finishDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragStart.current = null;
    setDragging(false);
  }, []);

  const openArtwork = (artwork: Artwork) => {
    if (!moved.current) {
      setActiveArtwork(artwork);
    }
  };

  return (
    <>
      <section
        id="gallery"
        className={`relative h-screen min-h-[620px] w-full touch-pan-y overflow-hidden bg-museum-paper ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        aria-label="可拖拽 OC 图集画布"
      >
        <div
          className="absolute left-1/2 top-[45%] h-[560px] w-[1960px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out sm:top-[46%]"
          style={{
            transform: `translate(calc(-50% + ${offsetX}px), -50%)`
          }}
        >
          {artworks.map((artwork) => (
            <button
              key={artwork.id}
              type="button"
              onClick={() => openArtwork(artwork)}
              className="group absolute select-none text-left outline-none"
              style={{
                left: `calc(50% + ${artwork.x}px)`,
                top: `calc(50% + ${artwork.y}px)`,
                width: artwork.width,
                height: artwork.height,
                zIndex: artwork.z,
                transform: `rotate(${artwork.rotate}deg)`
              }}
            >
              <img
                src={artwork.src}
                alt={artwork.alt}
                draggable={false}
                className="h-full w-full object-cover shadow-[0_18px_42px_rgba(49,41,34,0.12)] transition duration-300 group-hover:scale-[1.018] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-museum-ink"
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 bg-[#e6dfd5]/82 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-museum-ink opacity-0 backdrop-blur-sm transition group-hover:opacity-100 sm:block">
                查看
              </span>
            </button>
          ))}
        </div>

        <div
          id="gallery-intro"
          className="pointer-events-none absolute bottom-10 left-1/2 z-20 w-[min(760px,calc(100%-40px))] -translate-x-1/2 text-center font-display text-[clamp(1.08rem,2vw,1.5rem)] leading-[1.08] text-museum-ink sm:bottom-12"
        >
          <p className="line-clamp-2">
            这里收藏着 Corroya 的原创角色、约稿作品、世界观碎片与私人藏品。每一张图都是一个角色存在过的证据，也是一座宇宙里被点亮的房间。
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-museum-muted">
          <span>拖拽</span>
          <span className="h-px w-9 bg-museum-muted/55" />
          <span>查看</span>
        </div>
      </section>

      <Lightbox artwork={activeArtwork} onClose={() => setActiveArtwork(null)} />
    </>
  );
}
