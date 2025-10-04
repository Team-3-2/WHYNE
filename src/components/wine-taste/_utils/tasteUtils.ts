import { GaugeLevel } from "@/components/gauge/block-gauge";

/**
 * 와인 맛 유형과 강도 레벨에 따른 설명을 반환하는 함수
 * @author junyeol
 * @param type 맛 타입 ( 바디감, 탄닌, 당도, 산미 )
 * @param level 맛 레벨 ( 0 ~ 6 )
 * @returns 맛 설명 텍스트
 */
export const getTasteDescription = (
  type: string,
  level: GaugeLevel
): string => {
  switch (type) {
    case "바디감":
      return level === 0
        ? "없음"
        : level <= 2
          ? "가벼워요"
          : level <= 4
            ? "적당해요"
            : "진해요";
    case "탄닌":
      return level === 0
        ? "없음"
        : level <= 2
          ? "부드러워요"
          : level <= 4
            ? "적당해요"
            : "떫어요";
    case "당도":
      return level === 0
        ? "없음"
        : level <= 2
          ? "약간단맛"
          : level <= 4
            ? "중간단맛"
            : "달아요";
    case "산미":
      return level === 0
        ? "없음"
        : level <= 2
          ? "순해요"
          : level <= 4
            ? "새콤해요"
            : "상큼해요";
    default:
      return "";
  }
};
