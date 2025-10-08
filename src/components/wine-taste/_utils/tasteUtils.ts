import { GaugeLevel } from "@/components/gauge/block-gauge";

const tasteDescriptionMap: Record<string, readonly string[]> = {
  바디감: ["없음", "가벼워요", "적당해요", "진해요"],
  탄닌: ["없음", "부드러워요", "적당해요", "떫어요"],
  당도: ["없음", "약간단맛", "중간단맛", "달아요"],
  산미: ["없음", "순해요", "새콤해요", "상큼해요"],
};

const mapLevelToIndex = (level: GaugeLevel): number => {
  if (level === 0) return 0;
  if (level <= 2) return 1;
  if (level <= 4) return 2;
  return 3;
};

const getTasteDescription = (type: string, level: GaugeLevel): string => {
  const descriptions = tasteDescriptionMap[type];
  if (!descriptions) return "";
  return descriptions[mapLevelToIndex(level)] ?? "";
};

export default getTasteDescription;
