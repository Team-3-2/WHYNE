"use client";
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

const RecommendWineSlider = ({ wines }: RecommendWineSliderProps) => {
  return (
    <Carousel breakpoints={CAROUSEL_BREAKPOINTS.recommendWine}>
      {wines.map((wine) => (
        <Link key={wine.id} href={`/wines/${wine.id}`}>
          <RecommendCard wine={wine} />
        </Link>
      ))}
    </Carousel>
  );
};

export default RecommendWineSlider;
