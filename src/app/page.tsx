import LinkButton from "@/components/button/link-button";
import LandingBanner from "./(landing)/_components/landing-banner";
import LandingSection from "./(landing)/_components/landing-section";
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

      <footer className="flex-center w-full px-16 py-16">
        <LinkButton
          href="/wines"
          label="와인 보러가기"
          className="h-[50px] w-[283px]"
        />
      </footer>
    </>
  );
};

export default Home;
