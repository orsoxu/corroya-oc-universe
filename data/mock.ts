export type Artwork = {
  id: string;
  title?: string;
  arc: string;
  year: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotate: number;
  z: number;
};

export const artworks: Artwork[] = [
  {
    id: "amber-archive",
    title: "Amber Archive",
    arc: "North Hall",
    year: "C.Y. 014",
    src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
    alt: "Warm archive table with books",
    x: -520,
    y: -52,
    width: 190,
    height: 260,
    rotate: -1.8,
    z: 3
  },
  {
    id: "figure-study",
    title: "Figure Study",
    arc: "White Room",
    year: "C.Y. 018",
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
    alt: "Gallery sculpture display",
    x: -350,
    y: -14,
    width: 232,
    height: 208,
    rotate: 0.4,
    z: 4
  },
  {
    id: "copper-rail",
    title: "Copper Rail",
    arc: "Transit Myth",
    year: "C.Y. 021",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80",
    alt: "Warm architectural path",
    x: -118,
    y: -98,
    width: 280,
    height: 305,
    rotate: -0.7,
    z: 6
  },
  {
    id: "veranda",
    title: "Veranda Signal",
    arc: "Summer Annex",
    year: "C.Y. 025",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    alt: "Sunlit house window",
    x: 118,
    y: 4,
    width: 142,
    height: 164,
    rotate: 1.2,
    z: 5
  },
  {
    id: "green-glass",
    title: "Green Glass Dream",
    arc: "Rain Theater",
    year: "C.Y. 028",
    src: "https://images.unsplash.com/photo-1496507025847-08a80b2e35be?auto=format&fit=crop&w=1000&q=80",
    alt: "Glass vessel in moody light",
    x: 270,
    y: -66,
    width: 252,
    height: 298,
    rotate: -0.8,
    z: 7
  },
  {
    id: "black-door",
    title: "Black Door",
    arc: "Morrow House",
    year: "C.Y. 030",
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    alt: "Dark architectural doorway",
    x: 496,
    y: -20,
    width: 112,
    height: 210,
    rotate: 0.5,
    z: 6
  },
  {
    id: "paper-blinds",
    title: "Paper Blinds",
    arc: "Quiet Bureau",
    year: "C.Y. 031",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    alt: "Minimal paper and desk texture",
    x: 616,
    y: -46,
    width: 194,
    height: 224,
    rotate: 1,
    z: 3
  },
  {
    id: "the-gathering",
    title: "The Gathering",
    arc: "Public Hall",
    year: "C.Y. 033",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    alt: "Soft open landscape used as a placeholder artwork",
    x: 848,
    y: -2,
    width: 122,
    height: 128,
    rotate: -0.6,
    z: 4
  },
  {
    id: "chair-portrait",
    title: "Chair Portrait",
    arc: "Last Apartment",
    year: "C.Y. 036",
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80",
    alt: "Chair in a muted room",
    x: 1040,
    y: -76,
    width: 214,
    height: 298,
    rotate: 0.3,
    z: 2
  }
];

export const characters = [
  {
    name: "Corroya",
    role: "策展人 / 记忆编纂者",
    note: "保存破碎时代的角色档案，将世界观切片整理成可被再次观看的展柜。"
  },
  {
    name: "Nair Sol",
    role: "北境通信员",
    note: "负责穿越灰白边境传递手写消息，身上总带着没有日期的车票。"
  },
  {
    name: "Luen",
    role: "玻璃温室守夜人",
    note: "记录雨季里醒来的植物与梦，擅长把危险藏进温柔的句子里。"
  }
];

export const worldview =
  "这里收藏着 Corroya 的原创角色、约稿作品、世界观碎片与私人藏品。每一张图都是一个角色存在过的证据，也是一座宇宙里被点亮的房间。那些被保存下来的图像，不只是作品，也是角色生活过、被注视过、被认真想象过的痕迹。";
