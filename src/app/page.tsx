import Image from "next/image";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <>
      <div className="flex w-full justify-center overflow-hidden">
        <Image
          src="/images/landing/landing-banner.jpg"
          alt="와인 추천 서비스 메인 배너"
          width={1920}
          height={664}
          sizes="1920px"
          priority
          style={{ minWidth: "1920px", height: "664px" }}
        />
      </div>

      <main
        className={cn("flex flex-col items-center pt-16", "gap-12 pc:gap-24")}
      >
        <section
          className={cn(
            "flex w-full max-w-6xl flex-col items-start gap-8 px-4",
            "pc:flex-row pc:items-center pc:gap-36 pc:px-0"
          )}
        >
          <div className="flex flex-col gap-4 text-left pc:flex-1">
            <h2
              className={cn(
                "flex flex-col",
                "text-heading-lg pc:text-heading-lg"
              )}
            >
              <span>매달 새롭게 만나는</span>
              <span>와인 추천 콘텐츠</span>
            </h2>
            <p className="text-gray-600">매달 다양한 인기 와인을 만나보세요.</p>
          </div>
          <div className="w-full pc:w-[725px]">
            <Image
              src="/images/landing/landing-section-1.jpg"
              alt="월간 와인 추천 콘텐츠 이미지"
              width={725}
              height={470}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section
          className={cn(
            "flex w-full max-w-6xl flex-col items-start gap-8 px-4",
            "pc:flex-row-reverse pc:items-center pc:gap-36 pc:px-0"
          )}
        >
          <div className="flex flex-col gap-4 text-left pc:flex-1">
            <h2
              className={cn(
                "flex flex-col",
                "text-heading-lg pc:text-heading-lg"
              )}
            >
              <span>다양한 필터로 찾는</span>
              <span>내 맞춤 와인</span>
            </h2>
            <div className="flex flex-col text-gray-600">
              <span>와인 타입, 가격, 평점으로</span>
              <span>나에게 맞는 와인을 쉽게 검색해요.</span>
            </div>
          </div>
          <div className="w-full pc:w-[725px]">
            <Image
              src="/images/landing/landing-section-2.jpg"
              alt="와인 필터 및 검색 기능 이미지"
              width={725}
              height={470}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section
          className={cn(
            "flex w-full max-w-6xl flex-col items-start gap-8 px-4",
            "pc:flex-row pc:items-center pc:gap-36 pc:px-0"
          )}
        >
          <div className="flex flex-col gap-4 text-left pc:flex-1">
            <h2
              className={cn(
                "flex flex-col",
                "text-heading-lg pc:text-heading-lg"
              )}
            >
              <span>직관적인</span>
              <span>리뷰 시스템</span>
            </h2>
            <div className="flex flex-col text-gray-600">
              <span>더 구체화된 리뷰 시스템으로</span>
              <span>쉽고 빠르게 와인 리뷰를 살펴보세요.</span>
            </div>
          </div>
          <div className="w-full pc:w-[725px]">
            <Image
              src="/images/landing/landing-section-3.jpg"
              alt="와인 리뷰 시스템 이미지"
              width={725}
              height={470}
              className="h-auto w-full"
            />
          </div>
        </section>
      </main>

      <footer className="flex-center py-8">
        <button className="rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600">
          임시 버튼
        </button>
      </footer>
    </>
  );
};

export default Home;
