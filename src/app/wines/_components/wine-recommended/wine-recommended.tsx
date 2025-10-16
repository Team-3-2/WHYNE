"use client";
import RecommendWineSlider from "@/app/wines/_components/wine-recommended/recommend-slider";
import RecommendCardSkeleton from "@/app/wines/_components/wine-recommended/recommend-card-skeleton";
import { useGetRecommendedWines } from "@/hooks/api/wines/use-get-recommended-wines";

/**
 * [이번 달 추천 와인] 영역
 * @author yeonsu
 */

const WineRecommended = () => {
  const { data: wines, isLoading } = useGetRecommendedWines();
  return (
    <>
      <section className="bg-[url('/images/wines/bg-recommended.png')] bg-cover bg-repeat pt-[60px] tablet:pt-[70px] pc:rounded-bl-[88px] pc:rounded-br-[88px] pc:pt-[70px]">
        <div className="container pb-[28px] pt-[42px] tablet:pb-[44px] tablet:pt-[30px] pc:pb-[60px] pc:pt-[44px]">
          <h2 className="mb-[19px] px-[20px] text-heading-sm text-gray-800 tablet:mb-[33px] tablet:px-[50px] tablet:text-heading-md pc:mb-[38px] pc:px-[60px]">
            이번 달 추천 와인
          </h2>
          <div className="flex-center min-h-[243px] tablet:min-h-[303px] pc:min-h-[343px]">
            {isLoading ? (
              <div className="nth-child grid w-full grid-cols-2 gap-x-[32px] mobile:pb-[34px] tablet:grid-cols-3 tablet:gap-x-[4px] tablet:px-[57px] pc:grid-cols-4 pc:gap-x-[74px] pc:px-[57px]">
                {Array.from({
                  length: 4,
                }).map((_, i) => (
                  <div
                    key={i}
                    className="mobile:[&:nth-child(3)]:hidden mobile:[&:nth-child(4)]:hidden tablet:[&:nth-child(4)]:hidden"
                  >
                    <RecommendCardSkeleton />
                  </div>
                ))}
              </div>
            ) : (
              <RecommendWineSlider wines={wines ?? []} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WineRecommended;
