import getRecommendedWines from "@/api/wines/get-recommended";
import RecommendWineSlider from "@/app/wines/_components/wine-recommended/recommend-slider";
import { Button, Searchbar, SelectType } from "@/components";

/**
 * [이번 달 추천 와인] 영역
 * @author yeonsu
 */

const WineRecommended = async () => {
  const wines = await getRecommendedWines(10);

  return (
    <>
      <section className="bg-[url('/images/wines/bg-recommended.png')] bg-cover bg-repeat pt-[60px] tablet:pt-[70px] pc:rounded-bl-[88px] pc:rounded-br-[88px] pc:pt-[70px]">
        <div className="container pb-[28px] pt-[42px] tablet:pb-[44px] tablet:pt-[30px] pc:pb-[60px] pc:pt-[44px]">
          <h2 className="mb-[19px] mb-[38px] px-[20px] text-heading-sm text-gray-800 tablet:mb-[33px] tablet:px-[50px] tablet:text-heading-md pc:px-[60px]">
            이번 달 추천 와인
          </h2>
          <div className="flex-center mobile:min-h-[284px] tablet:min-h-[303px] pc:min-h-[319px]">
            <RecommendWineSlider wines={wines} />
          </div>
        </div>
      </section>
      <section
        aria-labelledby="browse-title"
        className="container mt-[45px] flex w-full items-start gap-[60px]"
      >
        <h2 id="browse-title" className="sr-only">
          와인 탐색
        </h2>
        {/* 사이드 필터: aside + form + fieldset/legend */}
        <aside className="flex w-[284px] flex-col gap-12" aria-label="필터">
          <form aria-describedby="filter-help">
            <p id="filter-help" className="sr-only">
              타입, 가격, 평점으로 결과를 필터링합니다.
            </p>

            <div>
              <h3 className="text-heading-xs mb-3">타입</h3>
              <SelectType isError={false} />
            </div>

            <fieldset className="mt-6">
              <legend className="text-heading-xs mb-3 block">가격</legend>
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center justify-between text-sm">
                  <span aria-live="polite">₩ 0</span>
                  <span aria-live="polite">₩ 74,000</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={74000}
                  step={1000}
                  aria-label="최대 가격"
                  className="w-full"
                />
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-heading-xs mb-3 block">평점</legend>

              <div className="flex items-center gap-[14px]">
                <input type="checkbox" id="rating-all" />
                <label htmlFor="rating-all">전체</label>
              </div>
              <div className="flex items-center gap-[14px]">
                <input type="checkbox" id="rating-45-50" />
                <label htmlFor="rating-45-50">4.5 - 5.0</label>
              </div>
              <div className="flex items-center gap-[14px]">
                <input type="checkbox" id="rating-40-45" />
                <label htmlFor="rating-40-45">4.0 - 4.5</label>
              </div>
              <div className="flex items-center gap-[14px]">
                <input type="checkbox" id="rating-35-40" />
                <label htmlFor="rating-35-40">3.5 - 4.0</label>
              </div>
              <div className="flex items-center gap-[14px]">
                <input type="checkbox" id="rating-30-35" />
                <label htmlFor="rating-30-35">3.0 - 3.5</label>
              </div>
            </fieldset>
          </form>
          <Button label="와인 등록하기" />
        </aside>

        {/* 검색 창 */}
        <Searchbar className="flex-1" />

        {/* 아이템 리스트 영역 */}
        <div></div>
      </section>
    </>
  );
};

export default WineRecommended;
