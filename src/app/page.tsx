import Image from "next/image";
import Button from "@/components/button/basic-button";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <>
      {/* TODO(김준열): 메인 배너의 포함되는 텍스트의 위치가 조금 어색함 PR 피드백 이후 수정*/}
      <div className="relative flex w-full justify-center overflow-hidden">
        <Image
          src="/images/landing/landing-banner.jpg"
          alt="와인 추천 서비스 메인 배너"
          width={1920}
          height={730}
          priority
          style={{ minWidth: "1920px" }}
        />
        <div className="absolute inset-0 ml-12 flex items-start justify-start pt-24 tablet:ml-24 pc:ml-80 pc:pt-48">
          <div className="text-white">
            <h1
              className={cn(
                "flex flex-col leading-tight",
                "text-title-page-sm tablet:text-title-page-sm pc:text-title-page-sm"
              )}
            >
              <span>한 곳에서 관리하는</span>
              <span>나만의 와인창고</span>
            </h1>
          </div>
        </div>
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
              <span className="pl-4 tablet:pl-8 pc:pl-0">
                매달 새롭게 만나는
              </span>
              <span className="pl-4 tablet:pl-8 pc:pl-0">와인 추천 콘텐츠</span>
            </h2>
            <p className="pl-4 text-gray-600 tablet:pl-8 pc:pl-0">
              매달 다양한 인기 와인을 만나보세요.
            </p>
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
              <span className="pl-4 tablet:pl-8 pc:pl-0">
                다양한 필터로 찾는
              </span>
              <span className="pl-4 tablet:pl-8 pc:pl-0">내 맞춤 와인</span>
            </h2>
            <div className="flex flex-col text-gray-600">
              <span className="pl-4 tablet:pl-8 pc:pl-0">
                와인 타입, 가격, 평점으로
              </span>
              <span className="pl-4 tablet:pl-8 pc:pl-0">
                나에게 맞는 와인을 쉽게 검색해요.
              </span>
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
              <span className="pl-4 tablet:pl-8 pc:pl-0">직관적인</span>
              <span className="pl-4 tablet:pl-8 pc:pl-0">리뷰 시스템</span>
            </h2>
            <div className="flex flex-col text-gray-600">
              <span className="pl-4 tablet:pl-8 pc:pl-0">
                더 구체화된 리뷰 시스템으로
              </span>
              <span className="pl-4 tablet:pl-8 pc:pl-0">
                쉽고 빠르게 와인 리뷰를 살펴보세요.
              </span>
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

      {/* TODO(김준열): 와인 보러가기 버튼 클릭시 /wines로 이동하게끔 추후에 연결 */}
      <footer className="flex-center w-full px-16 py-16">
        <Button label="와인 보러가기" className="h-[50px] w-[283px]" />
      </footer>
    </>
  );
};

export default Home;
