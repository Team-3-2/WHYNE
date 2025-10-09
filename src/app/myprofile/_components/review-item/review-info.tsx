"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { WineType } from "../../_types/review-type";
import { useState } from "react";

const PLACEHOLDER = "/images/placeholder/img-wine.svg";

const ReviewInfo = ({ info }: { info: WineType }) => {
  const [imgSrc, setImgSrc] = useState(info?.image || PLACEHOLDER);

  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 tablet:gap-4",
        "tablet:gap-4",
        "pc:gap-[17px]"
      )}
    >
      <Image
        src={imgSrc}
        alt="와인 이미지"
        width={60}
        height={60}
        className="h-[60px] w-[46px] tablet:h-[80px] tablet:w-[60px] pc:h-[80px] pc:w-[60px]"
        onError={() => setImgSrc(PLACEHOLDER)}
      />
      <div
        className={cn(
          "flex flex-col items-start gap-[2px]",
          "tablet:gap-[4px]",
          "pc:gap-[2px]"
        )}
      >
        <h2
          className={cn(
            "text-body-md font-bold tracking-[-0.02em] text-gray-900",
            "tablet:text-body-lg",
            "pc:text-body-lg"
          )}
        >
          {info?.name || "와인 이름을 찾을 수 없습니다."}
        </h2>
        <p className="text-body-sm tracking-[-0.02em] text-gray-500">
          {info?.region || "지역을 찾을 수 없습니다."}
        </p>
      </div>
    </div>
  );
};

export default ReviewInfo;
