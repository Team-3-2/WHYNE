import { recommendwinemock } from "@/mock";
import ArrowButton from "@/components/button/arrow-button";
import { cn } from "@/lib/utils";
const data = recommendwinemock;

const WineRecommend = () => {
  return (
    <div
      className={cn(
        "h-[440px] w-full bg-BgGray350",
        "tablet:h-[554px]",
        "pc:h-[603px] pc:rounded-b-[88px]"
      )}
    >
      <h2
        className={cn(
          "left-[37px] top-[85px] text-[30px] font-bold text-gray-800",
          "tablet:left-20 tablet:top-[127px]",
          "pc:left-[88px] pc:top-[154px]"
        )}
      >
        이번달 추천 와인
      </h2>
      <div>
        <ArrowButton
          direction="prev"
          className="z-10 hidden h-12 w-12 tablet:left-16 tablet:block pc:left-0 pc:block"
        />
        {/*disabled={isLoading}
          onClick={() => setIndex(index - 1)} */}
        <div
          className={cn(
            "flex flex-row gap-8 overflow-x-auto",
            "tablet:grid tablet:max-h-[320px] tablet:grid-cols-3 tablet:grid-rows-1 tablet:gap-1 tablet:overflow-hidden",
            "pc:grid pc:grid-cols-4 pc:grid-rows-1 pc:gap-[85px]"
          )}
        >
          {/*        
            {data?.map(({ id, name, region, image }) => (
            <RecommendWineCard
            key={id}
            id={id}
            name={name}
            region={region}
            image={image}
            />
            ))}
        */}
        </div>
        <ArrowButton
          direction="next"
          className="z-10 hidden h-12 w-12 tablet:right-16 tablet:top-[114px] tablet:block pc:right-0 pc:top-[136px] pc:block"
        />
        {/*        
          disabled={isLoading}
          onClick={() => setIndex(index + 1)}
        */}
      </div>
    </div>
  );
};

export default WineRecommend;
