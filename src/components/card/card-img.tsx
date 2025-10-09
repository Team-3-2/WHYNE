"use client";

import { useState, useEffect } from "react";
import { SVGProps } from "react";
import Image from "next/image";
import BASE64_IMAGES from "@/constants/base64-images";
import PlaceholderImgWine from "@/../public/images/placeholder/img-wine.svg";

const { WINE_BASE64 } = BASE64_IMAGES;

/**
 * 카드 이미지 컴포넌트(카드 이미지 로딩/에러/fallback 처리 역할)
 * @param src : 이미지 경로
 * @param alt : 이미지 대체 텍스트
 * @param blurDataURL : 블러 처리된 이미지 경로 (로딩 시 사용)
 * @param fallbackBlurDataURL : 와인 이미지가 아닐 경우에 사용되는 블러 처리된 이미지 경로 (기본값: WINE_BASE64)
 * @param fallbackImage : 이미지 로딩 실패 시 대체 사용되는 이미지 (기본값: PlaceholderImgWine)
 */

interface CardImageProps {
  src: string;
  alt: string;
  blurDataURL?: string;
  fallbackBlurDataURL?: string;
  fallbackImage?: React.FC<SVGProps<SVGSVGElement>>;
  className?: string;
  imageClassName?: string;
}

const CardImage = ({
  src,
  alt,
  blurDataURL,
  fallbackBlurDataURL = WINE_BASE64,
  fallbackImage: FallbackImage = PlaceholderImgWine,
  className,
  imageClassName,
}: CardImageProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) setHasError(true);
  }, [src]);

  return (
    <div
      className={`flex-center relative aspect-[1/1] w-full overflow-hidden bg-gray-200 p-[12%] ${className}`}
    >
      <span className="relative block h-full w-full">
        {!hasError && src ? (
          <Image
            src={src}
            fill
            alt={alt}
            className={`object-contain ${imageClassName}`}
            sizes="auto 100%"
            placeholder="blur"
            blurDataURL={blurDataURL ?? fallbackBlurDataURL}
            onError={() => setHasError(true)}
          />
        ) : (
          <FallbackImage
            className="relative left-[50%] h-full w-auto translate-x-[-50%] object-contain"
            role="img"
            aria-label={`${alt} 이미지 불러오기 실패`}
          />
        )}
      </span>
    </div>
  );
};

export default CardImage;
