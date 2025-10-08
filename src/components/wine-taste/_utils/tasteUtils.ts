import type { TasteData } from "../_types";
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

export const getTasteDescription = (
  type: string,
  level: GaugeLevel
): string => {
  const descriptions = tasteDescriptionMap[type];
  if (!descriptions) return "";
  return descriptions[mapLevelToIndex(level)] ?? "";
};

const TASTE_KEYS = [
  { type: "바디감", key: "lightBold" },
  { type: "탄닌", key: "smoothTannic" },
  { type: "당도", key: "drySweet" },
  { type: "산미", key: "softAcidic" },
] as const;

type TasteSource = Record<(typeof TASTE_KEYS)[number]["key"], number>;

export const buildTasteData = (source: TasteSource): TasteData[] =>
  TASTE_KEYS.map(({ type, key }) => {
    const level = source[key] as GaugeLevel;
    return {
      type,
      data: level,
      taste: getTasteDescription(type, level),
    };
  });
