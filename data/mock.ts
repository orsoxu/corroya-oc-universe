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

export type CharacterGalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CharacterGallery = {
  id: string;
  name: string;
  summary: string;
  images: CharacterGalleryImage[];
};

export const characterGalleries: CharacterGallery[] = [
  {
    id: "corroya",
    name: "Corroya",
    summary: "私人宇宙的收藏者，也是许多角色档案的第一位目击者。",
    images: [
      {
        id: "corroya-01",
        src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
        alt: "Corroya gallery placeholder portrait study",
        width: 900,
        height: 1200
      },
      {
        id: "corroya-02",
        src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
        alt: "Corroya archive placeholder",
        width: 1000,
        height: 760
      },
      {
        id: "corroya-03",
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        alt: "Corroya room placeholder",
        width: 900,
        height: 1120
      }
    ]
  },
  {
    id: "aurel",
    name: "Aurel",
    summary: "从旧日温室中走出的角色，擅长把沉默和光线一起收藏。",
    images: [
      {
        id: "aurel-01",
        src: "https://images.unsplash.com/photo-1496507025847-08a80b2e35be?auto=format&fit=crop&w=900&q=80",
        alt: "Aurel glass placeholder",
        width: 900,
        height: 1160
      },
      {
        id: "aurel-02",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80",
        alt: "Aurel landscape placeholder",
        width: 1100,
        height: 740
      },
      {
        id: "aurel-03",
        src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=850&q=80",
        alt: "Aurel interior placeholder",
        width: 850,
        height: 1100
      }
    ]
  },
  {
    id: "noctis",
    name: "Noctis",
    summary: "夜色、车站与未寄出的信件构成了 Noctis 的行动路线。",
    images: [
      {
        id: "noctis-01",
        src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
        alt: "Noctis dark architecture placeholder",
        width: 900,
        height: 1280
      },
      {
        id: "noctis-02",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1100&q=80",
        alt: "Noctis open field placeholder",
        width: 1100,
        height: 760
      },
      {
        id: "noctis-03",
        src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
        alt: "Noctis paper placeholder",
        width: 900,
        height: 1180
      }
    ]
  },
  {
    id: "lume",
    name: "Lume",
    summary: "Lume 的档案里总有柔和的日光、浅色房间和迟到的回声。",
    images: [
      {
        id: "lume-01",
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=950&q=80",
        alt: "Lume sunlit house placeholder",
        width: 950,
        height: 1120
      },
      {
        id: "lume-02",
        src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1050&q=80",
        alt: "Lume archive desk placeholder",
        width: 1050,
        height: 760
      },
      {
        id: "lume-03",
        src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=850&q=80",
        alt: "Lume gallery placeholder",
        width: 850,
        height: 1180
      }
    ]
  },
  {
    id: "vera",
    name: "Vera",
    summary: "Vera 负责保存那些尚未命名的藏品，以及角色之间隐约的联系。",
    images: [
      {
        id: "vera-01",
        src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80",
        alt: "Vera chair placeholder",
        width: 900,
        height: 1180
      },
      {
        id: "vera-02",
        src: "https://images.unsplash.com/photo-1496507025847-08a80b2e35be?auto=format&fit=crop&w=1100&q=80",
        alt: "Vera glass placeholder",
        width: 1100,
        height: 820
      },
      {
        id: "vera-03",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=850&q=80",
        alt: "Vera path placeholder",
        width: 850,
        height: 1120
      }
    ]
  }
];

export const galleryPrimaryCategories = [
  {
    id: "all",
    label: "全部",
    secondary: []
  },
  {
    id: "character-art",
    label: "角色图",
    secondary: ["头像", "半身", "立绘", "关系图", "服装设定"]
  },
  {
    id: "home-space",
    label: "家园空间",
    secondary: ["卧室", "房子", "庄园", "城堡", "工作室", "花园"]
  },
  {
    id: "personal-items",
    label: "私人物品",
    secondary: ["衣物", "首饰", "宝石", "武器", "零食", "蛋糕", "纪念品"]
  },
  {
    id: "favorites",
    label: "喜好收藏",
    secondary: ["食物", "香味", "植物", "动物", "舒适物"]
  },
  {
    id: "world-fragments",
    label: "世界观碎片",
    secondary: ["地点", "阵营", "城市", "神殿", "道具", "事件"]
  }
] as const;

export type GalleryPrimaryCategory = (typeof galleryPrimaryCategories)[number]["label"];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  primaryCategory: Exclude<GalleryPrimaryCategory, "全部">;
  secondaryCategory: string;
  characterName?: string;
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-avatar-corroya",
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
    alt: "角色头像占位图",
    title: "Corroya Archive",
    primaryCategory: "角色图",
    secondaryCategory: "头像",
    characterName: "Corroya",
    width: 900,
    height: 1200
  },
  {
    id: "gallery-half-aurel",
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    alt: "角色半身占位图",
    primaryCategory: "角色图",
    secondaryCategory: "半身",
    characterName: "Aurel",
    width: 1000,
    height: 1280
  },
  {
    id: "gallery-full-noctis",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "角色立绘占位图",
    title: "Noctis Route",
    primaryCategory: "角色图",
    secondaryCategory: "立绘",
    characterName: "Noctis",
    width: 1200,
    height: 820
  },
  {
    id: "gallery-bedroom",
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1000&q=80",
    alt: "卧室空间占位图",
    primaryCategory: "家园空间",
    secondaryCategory: "卧室",
    width: 1000,
    height: 1320
  },
  {
    id: "gallery-house",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    alt: "房子占位图",
    title: "Summer House",
    primaryCategory: "家园空间",
    secondaryCategory: "房子",
    width: 1200,
    height: 880
  },
  {
    id: "gallery-garden",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1100&q=80",
    alt: "花园占位图",
    primaryCategory: "家园空间",
    secondaryCategory: "花园",
    width: 1100,
    height: 760
  },
  {
    id: "gallery-jewelry",
    src: "https://images.unsplash.com/photo-1496507025847-08a80b2e35be?auto=format&fit=crop&w=900&q=80",
    alt: "首饰宝石占位图",
    primaryCategory: "私人物品",
    secondaryCategory: "首饰",
    width: 900,
    height: 1160
  },
  {
    id: "gallery-keepsake",
    src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1100&q=80",
    alt: "纪念品占位图",
    title: "Kept Object",
    primaryCategory: "私人物品",
    secondaryCategory: "纪念品",
    width: 1100,
    height: 820
  },
  {
    id: "gallery-plant",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    alt: "植物收藏占位图",
    primaryCategory: "喜好收藏",
    secondaryCategory: "植物",
    width: 900,
    height: 1180
  },
  {
    id: "gallery-food",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    alt: "食物收藏占位图",
    primaryCategory: "喜好收藏",
    secondaryCategory: "食物",
    width: 1000,
    height: 760
  },
  {
    id: "gallery-location",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "世界观地点占位图",
    primaryCategory: "世界观碎片",
    secondaryCategory: "地点",
    width: 900,
    height: 1180
  },
  {
    id: "gallery-temple",
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    alt: "神殿设定占位图",
    title: "Quiet Temple",
    primaryCategory: "世界观碎片",
    secondaryCategory: "神殿",
    width: 1200,
    height: 900
  }
];

export const worldview =
  "这里收藏着 Corroya 的原创角色、约稿作品、世界观碎片与私人藏品。每一张图都是一个角色存在过的证据，也是一座宇宙里被点亮的房间。那些被保存下来的图像，不只是作品，也是角色生活过、被注视过、被认真想象过的痕迹。";
