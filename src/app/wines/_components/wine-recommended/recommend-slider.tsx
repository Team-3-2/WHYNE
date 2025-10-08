"use client";
import Link from "next/link";
import { CAROUSEL_BREAKPOINTS } from "@/constants/responsive";
import Carousel from "@/components/carousel/carousel";
import RecommendCard from "./recommend-card";
import { CardItem } from "@/types/card-item-type";

/**
 * [이번 달 추천 와인] 슬라이더 컴포넌트
 * @author yeonsu
 * @param wines : 카드에 표시할 와인 정보 배열(CardItem 타입 배열)
 */

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
