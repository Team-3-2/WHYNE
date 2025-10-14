// types/wine.ts
import type { AromaKey } from "./aroma-type";

export interface Wine {
  id: number;
  name: string;
  region: string;
  image: string | null;
  price: number;
  type: "RED" | "WHITE" | "SPARKLING";
  avgRating: number;
  reviewCount: number;
  recentReview: {
    content: string;
  } | null;
}

/**
 * 리뷰 핵심 데이터 (작성/수정/제출용)
 * @author junyeol
 */
export interface ReviewBase {
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: AromaKey[];
  content: string;
  wineId: number;
}

/**
 * API 응답 리뷰 타입
 * @author junyeol
 */
export interface Review extends ReviewBase {
  id: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    nickname: string;
    image: string | null;
  };
  isLiked: object;
}

export interface WineDetail extends Wine {
  description?: string;
  year?: number;
  alcohol?: number;
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

export interface WineFormData {
  name: string;
  region: string;
  image: File | string;
  price: number;
  type: "RED" | "WHITE" | "SPARKLING";
  avgRating?: number;
}
