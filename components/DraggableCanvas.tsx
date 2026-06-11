"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { artworks, type Artwork } from "@/data/mock";
import { Lightbox } from "./Lightbox";

type Point = {
  x: number;
  y: number;
};

export function DraggableCanvas() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<Point | null>(null);
  const origin = useRef<Point>({ x: 0, y: 0 });
  const moved = useRef(false);

  const lines = useMemo(
    () => [
      { x: -230, y: -270, width: 176, rotate: 39 },
      { x: 260, y: -210, width: 210, rotate: 90 },
      { x: 660, y: -182, width: 278, rotate: -16 }
    ],
    []
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      dragStart.current = { x: event.clientX, y: event.clientY };
      origin.current = offset;
      moved.current = false;
      setDragging(true);
    },
    [offset]
  );

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) {
      return;
    }

    const next = {
      x: origin.current.x + event.clientX - dragStart.current.x,
      y: origin.current.y + event.clientY - dragStart.current.y
    };

    if (
      Math.abs(event.clientX - dragStart.current.x) > 4 ||
      Math.abs(event.clientY - dragStart.current.y) > 4
    ) {
      moved.current = true;
    }

    setOffset(next);
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
        className={`relative h-screen min-h-[620px] w-full touch-none overflow-hidden bg-museum-paper ${
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
            transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`
          }}
        >
          {lines.map((line, index) => (
            <span
              key={index}
              className="pointer-events-none absolute h-px origin-left bg-museum-line"
              style={{
                left: `calc(50% + ${line.x}px)`,
                top: `calc(50% + ${line.y}px)`,
                width: line.width,
                transform: `rotate(${line.rotate}deg)`
              }}
            />
          ))}

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
              <span className="pointer-events-none absolute -bottom-7 left-0 hidden text-[10px] font-bold uppercase tracking-[0.18em] text-museum-ink/70 opacity-0 transition group-hover:opacity-100 sm:block">
                {artwork.title}
              </span>
            </button>
          ))}
        </div>

        <div
          id="worldview"
          className="pointer-events-none absolute bottom-10 left-1/2 z-20 w-[min(680px,calc(100%-40px))] -translate-x-1/2 text-center font-display text-[clamp(1.12rem,2.1vw,1.55rem)] leading-[1.04] text-museum-ink sm:bottom-12"
        >
          <p className="line-clamp-2">{artworks.length} 件展品正在构成 Corroya 的私人宇宙：旧车站、温室、白色雕像与沉默角色互相留下线索，等待下一次布展。</p>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-museum-muted">
          <span>Drag</span>
          <span className="h-px w-9 bg-museum-muted/55" />
          <span>Open</span>
        </div>
      </section>

      <Lightbox artwork={activeArtwork} onClose={() => setActiveArtwork(null)} />
    </>
  );
}
