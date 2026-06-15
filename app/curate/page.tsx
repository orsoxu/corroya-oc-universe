"use client";

import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { characterGalleries, galleryImages, worldview } from "@/data/mock";

const tabs = ["上传", "管理", "世界观"] as const;
const visibilityLabels = ["公开", "私密", "半公开"] as const;
const primaryCategories = ["角色图", "家园空间", "私人物品", "喜好收藏", "世界观碎片"];
const characterOptions = ["Corroya", "Aurel", "Noctis", "新建角色"];
const relationCharacterOptions = ["Aurel", "Noctis", "Corroya"];
const relationTypeOptions = ["旧友", "恋人", "宿敌", "家人", "师徒", "不明关系"];

const managedCharacters = characterGalleries.slice(0, 3);
const managedImages = galleryImages.slice(0, 6).map((image, index) => ({
  ...image,
  visibility: visibilityLabels[index % visibilityLabels.length]
}));

const relationships = [
  {
    character: "Aurel",
    type: "旧友",
    note: "曾经一起生活在温室中"
  },
  {
    character: "Noctis",
    type: "不明关系",
    note: "只在某些事件中短暂交错"
  }
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-ui-label text-museum-muted">
      {children}
    </label>
  );
}

const fieldClass =
  "mt-2 w-full border border-museum-line bg-museum-paper/35 px-4 py-3 text-body-copy text-museum-ink outline-none transition placeholder:text-museum-muted/70 focus:border-museum-ink";

const quietButtonClass =
  "border border-museum-line px-4 py-2 text-ui-label text-museum-muted transition hover:border-museum-ink hover:text-museum-ink";

const strongButtonClass =
  "border border-museum-ink px-5 py-3 text-ui-label transition hover:bg-museum-ink hover:text-museum-paper";

export default function CuratePage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("上传");
  const [activeCharacterId, setActiveCharacterId] = useState(managedCharacters[0]?.id ?? "");
  const [relationDraft, setRelationDraft] = useState<{
    character: string;
    type: string;
    note: string;
  } | null>(null);
  const activeCharacter =
    managedCharacters.find((character) => character.id === activeCharacterId) ??
    managedCharacters[0];

  const characterImages = managedImages.filter(
    (image) => image.characterName === activeCharacter?.name
  );
  const visibleCharacterImages =
    characterImages.length > 0 ? characterImages : managedImages.slice(0, 3);

  return (
    <PageShell
      eyebrow=""
      title="布展"
      intro="整理作品、世界观、角色和公开状态，生成属于 Corroya 的 OC 宇宙主页。"
      centeredHeader
    >
      <div className="mb-8 flex gap-3 overflow-x-auto border-b border-museum-line pb-3">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 border-b px-1 pb-3 text-ui-label transition ${
                isActive
                  ? "border-museum-ink text-museum-ink"
                  : "border-transparent text-museum-muted hover:text-museum-ink"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {activeTab === "上传" ? (
        <section className="grid gap-7" aria-label="上传作品">
          <div className="border border-museum-line bg-museum-ink/[0.025] p-5 sm:p-6">
            <div className="flex min-h-[180px] flex-col items-center justify-center border border-museum-line/75 px-6 py-9 text-center sm:min-h-[220px]">
              <p className="text-section-title">
                上传图片
              </p>
              <p className="mt-5 text-body-copy text-museum-ink">
                拖拽图片到这里，或点击选择文件
              </p>
            </div>
          </div>

          <div className="border border-museum-line p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <section aria-label="必填项">
                <h2 className="text-section-title">必填项</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <FieldLabel>所属角色</FieldLabel>
                    <select className={fieldClass} defaultValue="Corroya">
                      {characterOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <FieldLabel>分类</FieldLabel>
                    <select className={fieldClass} defaultValue="角色图">
                      {primaryCategories.map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <FieldLabel>是否置顶展示</FieldLabel>
                    <label className="mt-3 flex items-start gap-4 border border-museum-line bg-museum-ink/[0.02] p-4">
                      <input type="checkbox" className="mt-1 accent-museum-ink" />
                      <span>
                        <span className="block text-body-copy text-museum-ink">置顶展示到首页展厅</span>
                        <span className="mt-1 block text-muted-copy">
                          开启后，这张图会出现在首页第一屏可拖拽展厅中
                        </span>
                      </span>
                    </label>
                  </div>

                  <div>
                    <FieldLabel>公开状态</FieldLabel>
                    <select className={fieldClass} defaultValue="公开">
                      {visibilityLabels.map((label) => (
                        <option key={label}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              <section className="border-t border-museum-line/70 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-label="非必填项">
                <div>
                  <h2 className="text-section-title">非必填项</h2>
                  <p className="mt-2 text-muted-copy">
                    可稍后补充，不会影响上传。
                  </p>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <FieldLabel>画师</FieldLabel>
                    <input className={fieldClass} placeholder="可选填写" />
                  </div>

                  <div>
                    <FieldLabel>约稿日期</FieldLabel>
                    <input className={fieldClass} type="date" />
                  </div>

                  <div>
                    <FieldLabel>约稿金额（选填）</FieldLabel>
                    <input className={fieldClass} placeholder="可选填写，例如 CNY 800" />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <FieldLabel>相关描述</FieldLabel>
                    <textarea
                      className={`${fieldClass} min-h-32 resize-none leading-7`}
                      placeholder="可记录设定、约稿备注或角色相关信息"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button type="button" className={strongButtonClass}>
                保存草稿
              </button>
              <button type="button" className={quietButtonClass}>
                预览
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {activeTab === "管理" ? (
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]" aria-label="角色管理">
          <aside className="border-y border-museum-line py-4 lg:border-y-0 lg:border-r lg:py-0 lg:pr-6">
            <div className="flex gap-3 overflow-x-auto lg:block lg:space-y-2 lg:overflow-visible">
              {managedCharacters.map((character) => {
                const isActive = character.id === activeCharacter?.id;

                return (
                  <button
                    key={character.id}
                    type="button"
                    onClick={() => setActiveCharacterId(character.id)}
                    className={`shrink-0 border-l px-4 py-3 text-left text-card-title transition lg:block lg:w-full ${
                      isActive
                        ? "border-museum-ink bg-museum-ink/[0.035] text-museum-ink"
                        : "border-museum-line text-museum-muted hover:border-museum-muted hover:text-museum-ink"
                    }`}
                  >
                    {character.name}
                  </button>
                );
              })}
              <button
                type="button"
                className="shrink-0 border-l border-museum-line px-4 py-3 text-left text-ui-label text-museum-muted transition hover:border-museum-ink hover:text-museum-ink lg:block lg:w-full"
              >
                + 新增角色
              </button>
            </div>
          </aside>

          <div className="grid gap-7">
            <section className="grid gap-5 border border-museum-line p-6 sm:p-8 lg:grid-cols-[1fr_160px]">
              <div className="grid gap-5">
                <div>
                  <FieldLabel>角色名</FieldLabel>
                  <input className={fieldClass} defaultValue={activeCharacter?.name} />
                </div>
                <div>
                  <FieldLabel>角色简介</FieldLabel>
                  <textarea
                    className={`${fieldClass} min-h-28 resize-none leading-7`}
                    defaultValue={activeCharacter?.summary}
                  />
                </div>
              </div>
              <div className="border border-museum-line p-5">
                <p className="text-ui-label text-museum-muted">
                  作品数量
                </p>
                <p className="mt-7 text-page-title">
                  {String(activeCharacter?.images.length ?? 0).padStart(2, "0")}
                </p>
              </div>
            </section>

            <section className="border-y border-museum-line py-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-section-title">图片列表</h2>
                <span className="text-ui-label text-museum-muted">
                  静态演示
                </span>
              </div>

              <div className="grid gap-4">
                {visibleCharacterImages.map((image, index) => (
                  <article
                    key={image.id}
                    className="grid gap-4 border border-museum-line p-4 sm:grid-cols-[96px_1fr] sm:items-center"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-24 w-24 border border-museum-line object-cover"
                    />
                    <div className="min-w-0">
                      <div className="grid gap-3 text-muted-copy sm:grid-cols-3">
                        <p>
                          <span className="block text-museum-muted/70">分类</span>
                          <span className="mt-1 block text-museum-ink">
                            {image.primaryCategory} / {image.secondaryCategory}
                          </span>
                        </p>
                        <p>
                          <span className="block text-museum-muted/70">公开状态</span>
                          <span className="mt-1 block text-museum-ink">
                            {visibilityLabels[index % visibilityLabels.length]}
                          </span>
                        </p>
                        <div className="flex flex-wrap gap-2 sm:justify-end">
                          <button type="button" className={quietButtonClass}>
                            编辑
                          </button>
                          <button type="button" className={quietButtonClass}>
                            删除
                          </button>
                          <button type="button" className={quietButtonClass}>
                            设为置顶
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="border border-museum-line p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-section-title">角色关系</h2>
                <button
                  type="button"
                  onClick={() =>
                    setRelationDraft({
                      character: "Aurel",
                      type: "旧友",
                      note: ""
                    })
                  }
                  className={quietButtonClass}
                >
                  + 添加关系
                </button>
              </div>
              <div className="mt-6 divide-y divide-museum-line border-y border-museum-line">
                {relationships.map((relation) => (
                  <article
                    key={`${relation.character}-${relation.type}`}
                    className="grid gap-4 py-5 text-body-copy lg:grid-cols-[0.42fr_0.42fr_1fr_auto]"
                  >
                    <p>
                      <span className="block text-muted-copy">关联角色</span>
                      <span className="mt-1 block">{relation.character}</span>
                    </p>
                    <p>
                      <span className="block text-muted-copy">关系类型</span>
                      <span className="mt-1 block">{relation.type}</span>
                    </p>
                    <p>
                      <span className="block text-muted-copy">关系说明</span>
                      <span className="mt-1 block leading-7">{relation.note}</span>
                    </p>
                    <div className="flex gap-2 lg:justify-end">
                      <button
                        type="button"
                        onClick={() => setRelationDraft(relation)}
                        className={quietButtonClass}
                      >
                        编辑
                      </button>
                      <button type="button" className={quietButtonClass}>
                        删除
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {relationDraft ? (
                <div className="mt-6 border border-museum-line bg-museum-ink/[0.02] p-5 sm:p-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel>关联角色</FieldLabel>
                      <select
                        className={fieldClass}
                        value={relationDraft.character}
                        onChange={(event) =>
                          setRelationDraft({
                            ...relationDraft,
                            character: event.target.value
                          })
                        }
                      >
                        {relationCharacterOptions.map((character) => (
                          <option key={character}>{character}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <FieldLabel>关系类型</FieldLabel>
                      <select
                        className={fieldClass}
                        value={relationDraft.type}
                        onChange={(event) =>
                          setRelationDraft({
                            ...relationDraft,
                            type: event.target.value
                          })
                        }
                      >
                        {relationTypeOptions.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <FieldLabel>关系说明</FieldLabel>
                      <textarea
                        className={`${fieldClass} min-h-28 resize-none leading-7`}
                        value={relationDraft.note}
                        onChange={(event) =>
                          setRelationDraft({
                            ...relationDraft,
                            note: event.target.value
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setRelationDraft(null)}
                      className={strongButtonClass}
                    >
                      保存
                    </button>
                    <button
                      type="button"
                      onClick={() => setRelationDraft(null)}
                      className={quietButtonClass}
                    >
                      取消
                    </button>
                  </div>
                </div>
              ) : null}
            </section>
          </div>
        </section>
      ) : null}

      {activeTab === "世界观" ? (
        <section className="grid gap-7 lg:grid-cols-[1fr_280px]" aria-label="世界观编辑">
          <div className="border border-museum-line p-6 sm:p-8">
            <h2 className="text-section-title">简单编辑</h2>
            <p className="mt-4 max-w-xl text-muted-copy">
              适合只想写一段世界观简介的用户
            </p>
            <textarea
              className={`${fieldClass} mt-7 min-h-[360px] resize-none font-worldview text-body-copy`}
              defaultValue={worldview}
            />
            <div className="mt-6 flex justify-end">
              <button type="button" className={strongButtonClass}>
                保存草稿
              </button>
            </div>
          </div>

          <aside className="border border-museum-line bg-museum-ink/[0.025] p-6 opacity-55">
            <p className="text-ui-label text-museum-muted">
              暂未开放
            </p>
            <h3 className="mt-5 text-section-title">详细编辑</h3>
            <p className="mt-5 text-muted-copy">
              后续可拆分章节、阵营、地点、事件与角色关系。
            </p>
            <button
              type="button"
              disabled
              className="mt-8 cursor-not-allowed border border-museum-line px-4 py-3 text-ui-label text-museum-muted"
            >
              详细编辑（暂未开放）
            </button>
          </aside>
        </section>
      ) : null}
    </PageShell>
  );
}
