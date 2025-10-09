"use client";

import { useState } from "react";
import WineTaste, { getTasteDescription } from "@/components/wine-taste";
import { Button, RatingInput } from "@/components";
import { aromaMap } from "@/components/flavor/aroma-map";
import { AromaKey } from "@/types/AromaType";
import { GaugeLevel } from "@/components/gauge/block-gauge";
import WineInfo from "../wine-info";
import type { ReviewFormData } from "../../_types";
import PageModalBtnWrapper from "@/components/modal/page-modal-btn-wrapper";

interface ReviewFormProps {
  wineId: number;
  wineName: string;
  wineRegion: string;
  wineImage: string | null;
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
  // 상태 관리
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [selectedAromas, setSelectedAromas] = useState<AromaKey[]>([]);

  const [tastes, setTastes] = useState([
    { type: "바디감", data: 0 as GaugeLevel, taste: "없음" },
    { type: "탄닌", data: 0 as GaugeLevel, taste: "없음" },
    { type: "당도", data: 0 as GaugeLevel, taste: "없음" },
    { type: "산미", data: 0 as GaugeLevel, taste: "없음" },
  ]);

  // 맛 변경 핸들러
  const handleTasteChange = (index: number, newLevel: GaugeLevel) => {
    const newTastes = [...tastes];
    newTastes[index].data = newLevel;
    newTastes[index].taste = getTasteDescription(
      newTastes[index].type,
      newLevel
    );
    setTastes(newTastes);
  };

  const toggleAroma = (aroma: AromaKey) => {
    setSelectedAromas((prev) =>
      prev.includes(aroma) ? prev.filter((a) => a !== aroma) : [...prev, aroma]
    );
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("별점을 선택해주세요");
      return;
    }

    // 리뷰 내용 검증
    if (!content.trim()) {
      alert("리뷰 내용을 입력해주세요");
      return;
    }

    // 데이터 생성
    const reviewData: ReviewFormData = {
      rating,
      lightBold: tastes[0].data,
      smoothTannic: tastes[1].data,
      drySweet: tastes[2].data,
      softAcidic: tastes[3].data,
      aroma: selectedAromas,
      content: content.trim(),
      wineId,
    };

    onSubmit(reviewData);
  };

  const aromaKeys = (Object.keys(aromaMap) as AromaKey[]).filter(
    (key) => key !== "EMPTY"
  );

  return (
    <div className="flex w-full max-w-[480px] flex-col">
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
          <RatingInput onChange={setRating} value={rating} />
        </div>

        {/* 후기 입력 */}
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="후기를 작성해주세요."
            className="h-32 w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            maxLength={500}
          />
          <p className="mr-2 flex justify-end text-body-sm text-gray-500">
            {content.length}/500
          </p>
        </div>

        {/* 와인의 맛 */}
        <div>
          <label className="mb-4 block text-heading-md">
            와인의 맛은 어떤가요?
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
              <button
                key={aroma}
                type="button"
                onClick={() => toggleAroma(aroma)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-colors duration-200 ${
                  selectedAromas.includes(aroma)
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                } `}
              >
                <span className="text-body-sm">{aromaMap[aroma].label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <PageModalBtnWrapper>
          <Button
            onClick={handleSubmit}
            label={isSubmitting ? "리뷰 남기는 중..." : "리뷰 남기기"}
            disabled={isSubmitting || rating === 0 || !content.trim()}
            className="h-[50px] w-full"
          />
        </PageModalBtnWrapper>
      </div>
    </div>
  );
}
