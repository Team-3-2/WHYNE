import Image from "next/image";
import { cn } from "@/lib/utils";
import { LandingSectionData } from "../_types";

/**
 * 랜딩 페이지 기능 소개 섹션
 * 애니메이션은 상위 컨테이너에서 제어
 */
const LandingSection = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  layout = "default",
}: LandingSectionData) => {
  const isReverse = layout === "reverse";

  return (
    <section
      data-landing-section
      data-landing-section-layout={layout}
      className={cn(
        "flex w-full max-w-6xl select-none flex-col items-start gap-8",
        isReverse
          ? "pc:flex-row-reverse pc:items-center pc:gap-36"
          : "pc:flex-row pc:items-center pc:gap-36"
      )}
    >
      {/* 텍스트 영역 */}
      <div
        data-landing-section-text
        className={cn(
          "flex flex-col gap-4 overflow-hidden text-left pc:flex-1",
          "pl-4 pr-8",
          "pc:px-0 pc:pl-4 pc:pr-8",
          "tablet:pl-8 tablet:pr-8"
        )}
      >
        <div data-landing-section-text-inner>
          <h2
            className={cn(
              "flex flex-col",
              "text-heading-lg pc:text-heading-lg"
            )}
          >
            {title.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>
          <div className="flex flex-col text-gray-700">
            {subtitle.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 이미지 영역 */}
      <div
        data-landing-section-image
        className={cn(
          "w-full overflow-hidden pc:w-[680px]",
          isReverse ? "pr-4 tablet:pr-8" : "pl-4 tablet:pl-8",
          "pc:px-0"
        )}
      >
        <div
          data-landing-section-image-inner
          className="relative aspect-[145/94] w-full overflow-hidden"
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            sizes="(min-width: 1024px) 725px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
