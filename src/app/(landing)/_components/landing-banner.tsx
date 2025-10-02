import Image from "next/image";
import { cn } from "@/lib/utils";
import { LandingBannerData } from "../_types";

const LandingBanner = ({ title, imgSrc, imgAlt }: LandingBannerData) => {
  return (
    <div
      className={cn(
        "relative flex w-full justify-center",
        "h-[350px] tablet:h-[500px] pc:h-[700px]",
        "mt-[60px] tablet:mt-[70px] pc:mt-[70px]"
      )}
    >
      {/* 배경 이미지 */}
      <Image src={imgSrc} alt={imgAlt} fill priority className="object-cover" />

      {/* 텍스트 */}
      <div
        className={cn(
          "absolute inset-0 z-10",
          "flex items-start justify-start",
          "pt-8 tablet:pt-16 pc:pt-20",
          "px-8 tablet:px-[40px] pc:px-[310px]"
        )}
      >
        <h1
          className={cn(
            "flex flex-col leading-tight text-white",
            "text-[24px] tablet:text-[28px] pc:text-[32px]",
            "font-bold",
            "drop-shadow-2xl"
          )}
        >
          {title.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default LandingBanner;
