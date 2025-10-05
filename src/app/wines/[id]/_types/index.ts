import { AromaKey } from "@/types/AromaType";

/**
 * ReviewForm 컴포넌트에서 사용되는 폼 데이터 타입
 * @author junyeol
 * @property rating - 별점 (0 ~ 5)
 * @property lightBold - 바디감 (0 ~ 6)
 * @property smoothTannic - 탄닌 (0 ~ 6)
 * @property drySweet - 당도 (0 ~ 6)
 * @property softAcidic - 산미 (0 ~ 6)
 * @property aroma - 향 배열 (예: ["CHERRY", "BERRY"])
 * @property content - 리뷰 내용
 * @property windId - 해당하는 와인 ID
 */

export interface ReviewFormData {
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: AromaKey[];
  content: string;
  wineId: number;
}
