import { cn } from "@/lib/utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const ReviewItemSkeleton = () => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[51px] border-b border-gray-300 py-[16px] pb-[28px] pt-[39px]",
        "tablet:gap-[54px]",
        "pc:gap-[50px] pc:py-[80px]"
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[14px]">
        <div className="flex-col-center w-full gap-[26px]">
          <div className="flex w-full flex-col items-start gap-5">
            {/*별점 컴포넌트 */}
            <Skeleton width={200} height={20} />
            {/* 와인 정보 */}
            <div
              className={cn(
                "flex w-full items-center gap-2",
                "tablet:gap-4",
                "pc:gap-[17px]"
              )}
            >
              <div className="relative h-[80px] w-[60px]">
                <Image src="/images/placeholder/img-wine.svg" alt="" fill />
              </div>
              <div>
                <Skeleton width={300} height={20} style={{ marginBottom: 6 }} />
                <Skeleton width={100} height={16} />
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* FlavorIconList 컴포넌트 */}
            <Skeleton width={600} height={20} style={{ marginBottom: 6 }} />
          </div>
          {/* 리뷰 내용 */}
          <div className="w-full">
            <Skeleton width="100%" height={20} style={{ marginBottom: 8 }} />
            <Skeleton width="85%" height={20} />
          </div>
        </div>

        {/* WineTaste 컴포넌트 */}
        <div
          className={cn(
            "flex w-full flex-col gap-3",
            "tablet:grid tablet:grid-cols-2 tablet:gap-4",
            "pc:grid pc:grid-cols-2 pc:gap-4"
          )}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} width="100%" height={16} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewItemSkeleton;
