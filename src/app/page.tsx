import LandingBanner from "./(landing)/_components/landing-banner";
import LandingSections from "./(landing)/_components/landing-animations";
import LandingFloatingCTA from "./(landing)/_components/landing-floating-cta";
import {
  LANDING_BANNER,
  LANDING_SECTIONS,
} from "./(landing)/_constants/sections";

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
      <LandingSections sections={LANDING_SECTIONS} />

      <footer className="h-32" aria-hidden="true" />
      <LandingFloatingCTA />
    </>
  );
};

export default Home;
