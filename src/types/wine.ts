/**
 * 와인 타입 정의
 * @author junyeol
 */

import type { AromaKey } from "./AromaType";

export interface Wine {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: "RED" | "WHITE" | "SPARKLING";
  avgRating: number;
  reviewCount: number;
}

export interface Review {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: AromaKey[];
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    nickname: string;
    image: string | null;
  };
  isLiked: boolean;
  wineId: number;
}

export interface WineDetail extends Wine {
  description?: string;
  year?: number;
  alcohol?: number;

  // API 응답에 포함된 필드
  userId: number;
  recentReview: Review | null;
  reviews: Review[];
  avgRatings: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
  };
}
