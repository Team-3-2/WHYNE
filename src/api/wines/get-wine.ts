import instance from "@/lib/axios";
import type { WineDetail } from "@/types/wine";

/**
 * 와인 상세 정보 조회 (리뷰 포함)
 * @author junyeol
 * @param id 와인 ID
 * @returns 와인 상세 정보 + 전체 리뷰 목록
 */
export async function getWine(id: number): Promise<WineDetail> {
  const response = await instance.get(`/wines/${id}`);
  return response.data;
}
