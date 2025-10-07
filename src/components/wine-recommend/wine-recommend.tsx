"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CAROUSEL_BREAKPOINTS } from "@/constants/responsive";
import Carousel from "@/components/carousel/carousel";
import RecommendCard from "./recommend-card";

interface WineItem {
  id: number;
  name: string;
  region: string;
  image: string;
}

interface RecommendWineSliderProps {
  wines: WineItem[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const RecommendWineSlider = ({ wines }: RecommendWineSliderProps) => {
  const [randomItems, setRandomItems] = useState<WineItem[]>([]);

  useEffect(() => {
    if (wines.length > 0) {
      setRandomItems(shuffleArray(wines));
    }
  }, [wines]);

  return (
    <Carousel
      breakpoints={CAROUSEL_BREAKPOINTS.recommendWine}
      variant="recommendWine"
    >
      {randomItems.map((wine) => (
        <Link key={wine.id} href={`/wines/${wine.id}`}>
          <RecommendCard wine={wine} />
        </Link>
      ))}
    </Carousel>
  );
};

export default RecommendWineSlider;
