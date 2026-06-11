import { PageShell } from "@/components/PageShell";

const sections = [
  ["01", "选择作品", "从图集中挑选需要进入本期展厅的 OC 图像。"],
  ["02", "编辑叙事", "为作品填写展签、角色关系和世界观章节。"],
  ["03", "预览布展", "检查拼贴节奏、封面动线和手机端阅读顺序。"]
];

export default function CuratePage() {
  return (
    <PageShell
      eyebrow="Exhibition Draft"
      title="布展"
      intro="布展页目前是静态 mock 流程，不包含真实上传。它用于展示未来策展工具的基本信息结构。"
    >
      <div className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="min-h-[360px] border border-museum-line p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-museum-muted">
            Current Draft
          </p>
          <h2 className="mt-16 font-display text-5xl leading-[0.95]">
            Glasshouse Memory
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-museum-muted">
            一组关于温室、旧信件和角色自我命名的临时展览。状态为 mock，所有内容均来自前端数据。
          </p>
        </div>

        <div className="divide-y divide-museum-line border-y border-museum-line">
          {sections.map(([number, title, text]) => (
            <article key={number} className="grid gap-5 py-7 sm:grid-cols-[96px_1fr]">
              <span className="font-display text-4xl text-museum-muted">{number}</span>
              <div>
                <h2 className="font-display text-3xl">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-museum-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
