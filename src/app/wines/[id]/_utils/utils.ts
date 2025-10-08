import type { Review } from "@/types/wine";

/**
 * 리뷰 배열을 받아 맛 지표별 평균(0~6)을 0.5 반올림으로 계산해 돌려준다.
 * 리뷰가 없으면 전부 0으로 초기화된 평균을 반환한다.
 * @author junyeol
 * @param reviews 평균을 계산할 리뷰 목록
 * @returns 각 맛 지표의 평균 값
 */
const calculateAverageTastes = (reviews: Review[]) => {
  if (reviews.length === 0) {
    return {
      avgLightBold: 0,
      avgSmoothTannic: 0,
      avgDrySweet: 0,
      avgSoftAcidic: 0,
    };
  }

  const sum = reviews.reduce(
    (acc, review) => ({
      lightBold: acc.lightBold + review.lightBold,
      smoothTannic: acc.smoothTannic + review.smoothTannic,
      drySweet: acc.drySweet + review.drySweet,
      softAcidic: acc.softAcidic + review.softAcidic,
    }),
    { lightBold: 0, smoothTannic: 0, drySweet: 0, softAcidic: 0 }
  );

  const count = reviews.length;

  return {
    avgLightBold: Math.round(sum.lightBold / count),
    avgSmoothTannic: Math.round(sum.smoothTannic / count),
    avgDrySweet: Math.round(sum.drySweet / count),
    avgSoftAcidic: Math.round(sum.softAcidic / count),
  };
};

export default calculateAverageTastes;
