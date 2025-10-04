"use client";

import { useState } from "react";
import WineTaste from "@/components/wine-taste/wine-taste";
import StarRating from "@/components/star-rating/star-rating";
import Button from "@/components/button/basic-button";
import Chip from "@/components/chip/chip";
import { aromaMap } from "@/components/flavor/aroma-map";
import { AromaKey } from "@/types/AromaType";
import { GaugeLevel } from "@/components/gauge/block-gauge";
import { getTasteDescription } from "@/components/wine-taste/_utils/tasteUtils";
import WineInfo from "./wine-info";
import type { ReviewFormData } from "../_types";

interface ReviewFormProps {
  wineId: number;
  wineName: string;
  wineRegion: string;
  wineImage: string;
  onSubmit: (data: ReviewFormData) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export default function ReviewForm({
  wineId,
  wineName,
  wineRegion,
  wineImage,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [tastes, setTastes] = useState([
    { type: "바디감", data: 0 as GaugeLevel, taste: "없음" },
    { type: "탄닌", data: 0 as GaugeLevel, taste: "없음" },
    { type: "당도", data: 0 as GaugeLevel, taste: "없음" },
    { type: "산미", data: 0 as GaugeLevel, taste: "없음" },
  ]);

  const handleTasteChange = (index: number, newLevel: GaugeLevel) => {
    const newTastes = [...tastes];
    newTastes[index].data = newLevel;
    newTastes[index].taste = getTasteDescription(
      newTastes[index].type,
      newLevel
    );
    setTastes(newTastes);
  };

  const handleSubmit = () => {
    const reviewData: ReviewFormData = {
      rating,
      lightBold: tastes[0].data,
      smoothTannic: tastes[1].data,
      drySweet: tastes[2].data,
      softAcidic: tastes[3].data,
      aroma: [],
      content,
      wineId,
    };

    onSubmit(reviewData);
  };

  const aromaKeys = (Object.keys(aromaMap) as AromaKey[]).filter(
    (key) => key !== "EMPTY"
  );

  return (
    <div className="flex w-full max-w-[480px] flex-col">
      {/* 헤더 */}
      <div className="flex items-center justify-between pb-8">
        <h2 className="text-heading-lg">리뷰 등록</h2>
        <button
          onClick={onCancel}
          className="text-2xl leading-none text-gray-400 hover:text-gray-600"
          aria-label="닫기"
          type="button"
        >
          ✕
        </button>
      </div>

      {/* 모든 컨텐츠 */}
      <div className="flex flex-col gap-8">
        {/* 와인 정보 */}
        <div>
          <WineInfo name={wineName} region={wineRegion} image={wineImage} />
          <div className="mt-4 border-t border-gray-300" />
        </div>

        {/* 별점 선택 */}
        <div className="flex items-center gap-4">
          <label className="text-body-sm text-gray-500">별점 선택</label>
          <StarRating rating={rating} size="lg" />
        </div>

        {/* 후기 입력 */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="후기를 작성해주세요."
          className="h-32 w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          maxLength={500}
        />

        {/* 와인의 맛 */}
        <div>
          <label className="mb-4 block text-heading-md">
            와인의 맛은 어땠나요?
          </label>
          <WineTaste
            type="detail"
            tastes={tastes}
            onChange={handleTasteChange}
          />
        </div>

        {/* 향 선택 */}
        <div>
          <label className="mb-4 block text-heading-md">
            기억에 남는 향이 있나요?
          </label>
          <div className="flex flex-wrap gap-2">
            {aromaKeys.map((aroma) => (
              <Chip key={aroma} label={aromaMap[aroma].label} />
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <Button
          onClick={handleSubmit}
          label={isSubmitting ? "리뷰 남기는 중" : "리뷰 남기기"}
          disabled={isSubmitting || rating === 0 || !content.trim()}
          className="w-full"
        />
      </div>
    </div>
  );
}
