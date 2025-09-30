import Image from "next/image";
import { cn } from "@/lib/utils";
import { LandingBannerData } from "../_types";

/**
 * 랜딩 페이지 메인 배너
 * @author junyeol
 */
const LandingBanner = ({ title, imgSrc, imgAlt }: LandingBannerData) => {
  return (
    <div className="relative flex w-full justify-center overflow-hidden">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1920}
        height={730}
        priority
        style={{ minWidth: "1920px" }}
      />
      <div className="absolute inset-0 ml-12 flex items-start justify-start pt-24 tablet:ml-24 pc:ml-80 pc:pt-48">
        <h1
          className={cn(
            "flex flex-col leading-tight text-white",
            "text-title-page-sm tablet:text-title-page-sm pc:text-title-page-sm"
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
