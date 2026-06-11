import { PageShell } from "@/components/PageShell";
import { characters } from "@/data/mock";

export default function CharactersPage() {
  return (
    <PageShell
      eyebrow="Character Index"
      title="角色集"
      intro="这里先以静态资料卡呈现角色索引。每个角色保留名称、身份与一句档案描述，后续可以扩展为详情页。"
    >
      <div className="grid gap-px overflow-hidden border border-museum-line bg-museum-line sm:grid-cols-3">
        {characters.map((character) => (
          <article key={character.name} className="bg-museum-paper p-6 sm:min-h-[310px] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-museum-muted">
              {character.role}
            </p>
            <h2 className="mt-8 font-display text-5xl leading-none">{character.name}</h2>
            <p className="mt-8 text-sm leading-7 text-museum-muted">{character.note}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
