import { AromaKey } from "@/types/aroma-type";

type AromaInfo = {
  img: string;
  label: string;
};

export const aromaMap: Record<AromaKey, AromaInfo> = {
  CHERRY: {
    img: "/images/aroma/aroma-cherry.jpg",
    label: "체리",
  },
  BERRY: {
    img: "/images/aroma/aroma-berry.jpg",
    label: "베리",
  },
  OAK: {
    img: "/images/aroma/aroma-oak-cask.jpg",
    label: "오크",
  },
  VANILLA: {
    // 이미지 없음
    img: "/images/aroma/aroma-no-image.jpg",
    label: "바닐라",
  },
  PEPPER: {
    img: "/images/aroma/aroma-herb.jpg",
    label: "후추",
  },
  BAKING: {
    img: "/images/aroma/aroma-toast.jpg",
    label: "베이킹",
  },
  GRASS: {
    img: "/images/aroma/aroma-grass.jpg",
    label: "풀",
  },
  APPLE: {
    img: "/images/aroma/aroma-apple.jpg",
    label: "사과",
  },
  PEACH: {
    img: "/images/aroma/aroma-peach.jpg",
    label: "복숭아",
  },
  CITRUS: {
    img: "/images/aroma/aroma-citrus.jpg",
    label: "시트러스",
  },
  TROPICAL: {
    img: "/images/aroma/aroma-coconut.jpg",
    label: "트로피컬",
  },
  MINERAL: {
    img: "/images/aroma/aroma-mineral.jpg",
    label: "미네랄",
  },
  FLOWER: {
    img: "/images/aroma/aroma-flower.jpg",
    label: "꽃",
  },
  TOBACCO: {
    // 이미지 없음
    img: "/images/aroma/aroma-no-image.jpg",
    label: "담배",
  },
  EARTH: {
    img: "/images/aroma/aroma-wet-soil.jpg",
    label: "흙",
  },
  CHOCOLATE: {
    img: "/images/aroma/aroma-chocolate.jpg",
    label: "초콜릿",
  },
  SPICE: {
    // 이미지 없음
    img: "/images/aroma/aroma-no-image.jpg",
    label: "향신료",
  },
  CARAMEL: {
    // 이미지 없음
    img: "/images/aroma/aroma-no-image.jpg",
    label: "카라멜",
  },
  LEATHER: {
    // 이미지 없음
    img: "/images/aroma/aroma-no-image.jpg",
    label: "가죽",
  },
  EMPTY: {
    img: "/images/aroma/aroma-no-image.jpg",
    label: "-",
  },
};
