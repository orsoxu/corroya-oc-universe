import { PageShell } from "@/components/PageShell";
import { artworks } from "@/data/mock";

export default function PlazaPage() {
  return (
    <PageShell
      eyebrow="Public Room"
      title="广场"
      intro="广场暂时是静态 mock 展区，用于展示近期公开作品、观展记录和角色宇宙入口。后续可以接入真实社区内容。"
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {artworks.slice(0, 6).map((artwork) => (
          <article key={artwork.id} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-museum-wash">
              <img
                src={artwork.src}
                alt={artwork.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-museum-line pt-3">
              <h2 className="font-display text-2xl">{artwork.title}</h2>
              <p className="text-right text-[10px] font-bold uppercase tracking-[0.18em] text-museum-muted">
                {artwork.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
