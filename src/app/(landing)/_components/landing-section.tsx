import Image from "next/image";
import { cn } from "@/lib/utils";
import { LandingSectionData } from "../_types";

/**
 * 랜딩 페이지 기능 소개 섹션
 * @author junyeol
 * @param title : 섹션 제목
 * @param subtitle : 섹션 부제목
 * @param imgSrc : 섹션 이미지
 * @param imgAlt : 섹션 이미지 alt
 * @param layout : 섹션 레이아웃
 */
const LandingSection = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  layout = "default",
}: LandingSectionData) => {
  return (
    <section
      className={cn(
        "flex w-full max-w-6xl flex-col items-start gap-8",
        layout === "reverse"
          ? "pc:flex-row-reverse pc:items-center pc:gap-36"
          : "pc:flex-row pc:items-center pc:gap-36"
      )}
    >
      {/* 텍스트 영역 */}
      <div
        className={cn(
          "flex flex-col gap-4 text-left pc:flex-1",
          "pl-4 pr-8",
          "pc:px-0 pc:pl-4 pc:pr-8",
          "tablet:pl-8 tablet:pr-8"
        )}
      >
        <h2
          className={cn("flex flex-col", "text-heading-lg pc:text-heading-lg")}
        >
          {title.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h2>
        <div className="flex flex-col text-gray-600">
          {subtitle.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </div>
      </div>

      {/* 이미지 영역 */}
      <div
        className={cn(
          "w-full pc:w-[725px]",
          layout === "default" ? "pl-4 tablet:pl-8" : "pr-4 tablet:pr-8",
          "pc:px-0"
        )}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={725}
          height={470}
          priority
          className="w-full"
        />
      </div>
    </section>
  );
};

export default LandingSection;
