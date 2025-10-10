import { AromaKey } from "@/types/AromaType";

export type UserType = {
  id: number;
  nickname: string;
  image: string;
};

export type WineType = {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  avgRating: number;
  type: "RED" | "WHITE" | "SPARKLING";
};

export type ReviewItemType = {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: AromaKey;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: UserType;
  wine: WineType;
};
