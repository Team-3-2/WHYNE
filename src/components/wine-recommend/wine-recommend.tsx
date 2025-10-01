import { recommendwinemock } from "@/mock";
import ArrowButton from "@/components/button/arrow-button";
import { cn } from "@/lib/utils";
import RecommendWineCard from "./elements/wine-card-recommend";
import { useState } from "react";

const data = recommendwinemock;

const WineRecommend = () => {
  const [index, setIndex] = useState<number>(0);
  const pages = 4;
  const pagedata = data.slice(index, index + pages);
  return (
    <div
      className={cn(
        "h-[440px] w-full bg-BgGray350",
        "tablet:h-[554px]",
        "pc:h-[603px] pc:rounded-b-[88px]"
      )}
    >
      <div className="relative flex w-full flex-col gap-[19px] tablet:gap-[33px] tablet:pb-11 pc:mx-auto pc:w-[1195px] pc:gap-[39px] pc:pb-[60px]">
        <h2
          className={cn(
            "pl-[37px] pt-[85px] text-heading-md text-gray-800",
            "tablet:pl-20 tablet:pt-[127px]",
            "pc:pl-[88px] pc:pt-[154px]"
          )}
        >
          이번 달 추천 와인
        </h2>
        <div
          className={cn(
            "relative flex w-full flex-row tablet:h-[320px] pc:h-[320px]"
          )}
        >
          <ArrowButton
            direction="prev"
            className="relative z-10 h-12 w-12 mobile:hidden tablet:left-16 tablet:top-[114px] tablet:block pc:left-0 pc:top-[136px] pc:block"
            onClick={() => setIndex(index - 1)}
            disabled={index == 0}
          />
          {/*
           */}
          <div
            className={cn(
              "mx-auto flex flex-row items-center gap-8 mobile:overflow-x-auto",
              "tablet:h-[320px] tablet:gap-1",
              "pc:gap-[85px]"
            )}
          >
            {pagedata?.map(({ id, name, region, image }) => (
              <RecommendWineCard
                key={id}
                id={id}
                name={name}
                region={region}
                image={image}
              />
            ))}
          </div>
          <ArrowButton
            direction="next"
            className="relative z-10 h-12 w-12 mobile:hidden tablet:right-16 tablet:top-[114px] tablet:block pc:right-0 pc:top-[136px] pc:block"
            onClick={() => setIndex(index + 1)}
            disabled={index + pages == 8}
          />
          {/*        
          
          
        */}
        </div>
      </div>
    </div>
  );
};

export default WineRecommend;
