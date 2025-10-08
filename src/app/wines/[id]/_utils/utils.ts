import type { Review } from "@/types/wine";

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
