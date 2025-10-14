import LandingBanner from "./(landing)/_components/landing-banner";
import LandingSection from "./(landing)/_components/landing-section";
import LandingFloatingCTA from "./(landing)/_components/landing-floating-cta";
import {
  LANDING_BANNER,
  LANDING_SECTIONS,
} from "./(landing)/_constants/sections";
import { cn } from "@/lib/utils";

/**
 * 랜딩 페이지
 * @author junyeol
 * @returns 랜딩 페이지
 */
const Home = () => {
  return (
    <>
      {/* 메인 배너 */}
      <LandingBanner {...LANDING_BANNER} />

      {/* 기능 소개 섹션 */}
      <main
        className={cn("flex flex-col items-center pt-16", "gap-12 pc:gap-24")}
      >
        {LANDING_SECTIONS.map((section, index) => (
          <LandingSection key={index} {...section} />
        ))}
      </main>

      <footer className="h-32" aria-hidden="true" />
      <LandingFloatingCTA />
    </>
  );
};

export default Home;
