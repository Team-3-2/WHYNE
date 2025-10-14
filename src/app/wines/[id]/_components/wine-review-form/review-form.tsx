"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import WineTaste, {
  getTasteDescription,
  buildTasteData,
} from "@/components/wine-taste";
import { Button, Chip, RatingInput } from "@/components";
import { aromaMap } from "@/components/flavor/aroma-map";
import { AromaKey } from "@/types/aroma-type";
import { GaugeLevel } from "@/components/gauge/block-gauge";
import WineInfo from "../wine-info";
import type { ReviewBase, Wine } from "@/types/wine";
import PageModalBtnWrapper from "@/components/modal/page-modal-btn-wrapper";

interface ReviewFormProps {
  wine: Pick<Wine, "id" | "name" | "region" | "image">;
  onSubmit: (data: ReviewBase) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
  initialData?: ReviewBase;
  className?: string;
}

export default function ReviewForm({
  wine,
  onSubmit,
  onCancel,
  isSubmitting = false,
  initialData,
  className,
}: ReviewFormProps) {
  const {
    id: wineId,
    name: wineName,
    region: wineRegion,
    image: wineImage,
  } = wine;

  // 상태 관리
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [selectedAromas, setSelectedAromas] = useState<AromaKey[]>([]);
  const [ratingError, setRatingError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

  const [tastes, setTastes] = useState([
    { type: "바디감", data: 0 as GaugeLevel, taste: "없음" },
    { type: "탄닌", data: 0 as GaugeLevel, taste: "없음" },
    { type: "당도", data: 0 as GaugeLevel, taste: "없음" },
    { type: "산미", data: 0 as GaugeLevel, taste: "없음" },
  ]);

  useEffect(() => {
    if (initialData) {
      setRating(initialData.rating);
      setContent(initialData.content);
      setSelectedAromas(initialData.aroma);
      setTastes(
        buildTasteData({
          lightBold: initialData.lightBold,
          smoothTannic: initialData.smoothTannic,
          drySweet: initialData.drySweet,
          softAcidic: initialData.softAcidic,
        })
      );
    }
  }, [initialData]);

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

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (ratingError && newRating > 0) {
      setRatingError(null);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (contentError && e.target.value.trim()) {
      setContentError(null);
    }
  };

  const handleSubmit = () => {
    let hasError = false;

    if (rating === 0) {
      setRatingError("별점은 필수 선택이에요");
      hasError = true;
    }

    if (!content.trim()) {
      setContentError("후기 작성은 필수 입력이에요");
      hasError = true;
    }

    if (hasError) return;

    // 데이터 생성
    const reviewData: ReviewBase = {
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
    <div className={cn("flex w-full max-w-[480px] flex-col", className)}>
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
          <RatingInput
            onChange={handleRatingChange}
            value={rating}
            errorMsg={ratingError}
          />
        </div>

        {/* 후기 입력 */}
        <div>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="후기를 작성해주세요."
            className={cn(
              "h-32 w-full resize-none rounded-lg border p-3 focus:outline-none focus:ring-1",
              contentError
                ? "border-red-400 focus:ring-red-400"
                : "border-gray-300 focus:ring-primary"
            )}
            maxLength={500}
          />
          <div className="mr-2 mt-2 flex items-center gap-2">
            {contentError && (
              <span className="text-caption tracking-[-0.02em] text-red-300">
                {contentError}
              </span>
            )}
            <span
              className={cn(
                "ml-auto !text-caption tracking-[-0.02em] text-gray-500",
                contentError && "text-red-300"
              )}
            >
              {content.length}/500
            </span>
          </div>
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
              <Chip
                key={aroma}
                label={aromaMap[aroma].label}
                selected={selectedAromas.includes(aroma)}
                onToggle={() => toggleAroma(aroma)}
                aria-label={`${aromaMap[aroma].label} 선택`}
              />
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <PageModalBtnWrapper>
          <Button
            onClick={handleSubmit}
            label={isSubmitting ? "리뷰 남기는 중..." : "리뷰 남기기"}
            disabled={isSubmitting}
            className="h-[50px] w-full select-none"
          />
        </PageModalBtnWrapper>
      </div>
    </div>
  );
}
