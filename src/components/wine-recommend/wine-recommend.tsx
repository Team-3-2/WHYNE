"use client";
import Link from "next/link";
import { CAROUSEL_BREAKPOINTS } from "@/constants/responsive";
import Carousel from "@/components/carousel/carousel";
import RecommendCard from "./recommend-card";
import { CardItem } from "@/types/card-item-type";

interface RecommendWineSliderProps {
  wines: CardItem[];
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
