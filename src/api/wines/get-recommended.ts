import instance from "@/lib/axios";
import { CardItem } from "@/types/card-item-type";

const getRecommendedWines = async (limit: number): Promise<CardItem[]> => {
  try {
    const { data } = await instance.get("/wines/recommended", {
      params: { limit },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getRecommendedWines;
