import { GaugeLevel } from "@/components/gauge/block-gauge";

/**
 * 와인 맛 데이터 인터페이스
 * @author junyeol
 * @param type 맛 타입
 * @param data 맛 데이터
 * @param taste 맛
 */
export interface TasteData {
  type: string;
  data: GaugeLevel;
  taste: string;
}
/**
 * 와인 맛 뷰 타입
 * @param detail 상세
 * @param review 리뷰
 */
export type TasteViewType = "detail" | "review";

/**
 * 통합 WineTaste 컴포넌트 Props
 * @param type 컴포넌트 타입 ( detail | review )
 * @param tastes 맛 데이터 배열
 * @param onChange 맛 변경 함수
 */
export interface WineTasteProps {
  type: TasteViewType;
  tastes: TasteData[];
  onChange?: (index: number, newLevel: GaugeLevel) => void;
}

/**
 * 와인 맛 아이템 Props
 * @param type 맛 타입
 * @param data 맛 데이터
 * @param taste 맛 설명
 * @param onChange 맛 변경 함수
 */
export interface TasteItemProps {
  type: string;
  data: GaugeLevel;
  taste: string;
  onChange?: (newLevel: GaugeLevel) => void;
}
