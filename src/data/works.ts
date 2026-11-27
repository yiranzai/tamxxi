import { A } from "../react/data/assets";

export type WorkCategory = "painting" | "sculpture" | "print" | "video";

export const categoryLabels: Record<WorkCategory, string> = {
  painting: "绘画",
  sculpture: "雕塑",
  print: "出版物",
  video: "影像",
};

export type Work = {
  slug: string;
  title: string;
  english: string;
  href: string;
  image: string;
  tone?: "blue" | "gray";
  categories: WorkCategory[];
  tags: string[];
  year: string;
  medium: string;
};

export const works: Work[] = [
  {
    slug: "curled",
    title: "蜷缩雕刻",
    english: "Curled",
    href: "01蜷缩雕刻/",
    image: A.curledDetail,
    categories: ["sculpture"],
    tags: ["身体", "情绪", "黏土"],
    year: "2023",
    medium: "Clay / video",
  },
  {
    slug: "fading",
    title: "Fading",
    english: "Fading",
    href: "01-fading/",
    image: A.fadingLeft,
    categories: ["painting"],
    tags: ["记忆", "动物", "身体"],
    year: "2024",
    medium: "Acrylic",
  },
  {
    slug: "cryface",
    title: "Cryface",
    english: "Cryface",
    href: "02-cryface/",
    image: A.cry1,
    categories: ["painting"],
    tags: ["自画像", "情绪", "珍珠"],
    year: "2024",
    medium: "Acrylic",
  },
  {
    slug: "burning",
    title: "Burning",
    english: "Burning",
    href: "03-burning/",
    image: A.burningHero,
    categories: ["painting", "print"],
    tags: ["情绪", "身体", "版画"],
    year: "2024",
    medium: "Acrylic / print",
  },
  {
    slug: "heads",
    title: "头像雕刻",
    english: "Heads",
    href: "04头像雕刻/",
    image: A.head3,
    categories: ["sculpture"],
    tags: ["肖像", "雕塑"],
    year: "2024",
    medium: "Clay",
  },
  {
    slug: "self-portrait",
    title: "自画像雕刻",
    english: "Self Portrait",
    href: "03自画像雕刻/",
    image: A.cutSelf,
    tone: "blue",
    categories: ["sculpture", "video"],
    tags: ["自画像", "影像"],
    year: "2024",
    medium: "Clay / video",
  },
  {
    slug: "sorrow-set",
    title: "Sorrow Set",
    english: "Sorrow Set",
    href: "zi-ne/",
    image: A.zinePhoto,
    categories: ["print"],
    tags: ["zine", "漫画", "速写"],
    year: "2024",
    medium: "Risograph / offset",
  },
  {
    slug: "calendar",
    title: "Sorrow Set Calendar",
    english: "Calendar",
    href: "02日历/",
    image: A.calCard,
    tone: "gray",
    categories: ["print"],
    tags: ["日历", "黑胶", "周边"],
    year: "2024",
    medium: "Print / vinyl",
  },
];
