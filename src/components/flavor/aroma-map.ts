import { AromaKey } from "@/types/AromaType";

type AromaInfo = {
  img: string;
  label: string;
};

export const aromaMap: Record<AromaKey, AromaInfo> = {
  CHERRY: {
    img: "/images/aroma-cherry.jpg",
    label: "체리",
  },
  BERRY: {
    img: "/images/aroma-berry.jpg",
    label: "베리",
  },
  OAK: {
    img: "/images/aroma-oak-cask.jpg",
    label: "오크",
  },
  VANILLA: {
    // 이미지 없음
    img: "/images/aroma-no-image.jpg",
    label: "바닐라",
  },
  PEPPER: {
    img: "/images/aroma-herb.jpg",
    label: "후추",
  },
  BAKING: {
    img: "/images/aroma-toast.jpg",
    label: "베이킹",
  },
  GRASS: {
    img: "/images/aroma-grass.jpg",
    label: "풀",
  },
  APPLE: {
    img: "/images/aroma-apple.jpg",
    label: "사과",
  },
  PEACH: {
    img: "/images/aroma-peach.jpg",
    label: "복숭아",
  },
  CITRUS: {
    img: "/images/aroma-citrus.jpg",
    label: "시트러스",
  },
  TROPICAL: {
    img: "/images/aroma-coconut.jpg",
    label: "트로피컬",
  },
  MINERAL: {
    img: "/images/aroma-mineral.jpg",
    label: "미네랄",
  },
  FLOWER: {
    img: "/images/aroma-flower.jpg",
    label: "꽃",
  },
  TOBACCO: {
    // 이미지 없음
    img: "/images/aroma-no-image.jpg",
    label: "담배",
  },
  EARTH: {
    img: "/images/aroma-wet-soil.jpg",
    label: "흙",
  },
  CHOCOLATE: {
    img: "/images/aroma-chocolate.jpg",
    label: "초콜릿",
  },
  SPICE: {
    // 이미지 없음
    img: "/images/aroma-no-image.jpg",
    label: "향신료",
  },
  CARAMEL: {
    // 이미지 없음
    img: "/images/aroma-no-image.jpg",
    label: "카라멜",
  },
  LEATHER: {
    // 이미지 없음
    img: "/images/aroma-no-image.jpg",
    label: "가죽",
  },
  EMPTY: {
    img: "/images/aroma-no-image.jpg",
    label: "-",
  },
};
