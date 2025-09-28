import { cn } from "@/lib/utils";
import Image from "next/image";

const ReviewInfo = () => {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 tablet:gap-4",
        "tablet:gap-4",
        "pc:gap-[17px]"
      )}
    >
      <Image
        src="/images/test/test_wine.png"
        alt="와인 이미지"
        width={100}
        height={100}
        className="h-[60px] w-fit tablet:h-[80px] pc:h-[80px]"
      />
      <div
        className={cn(
          "flex flex-col items-start gap-[2px]",
          "tablet:gap-[4px]",
          "pc:gap-[2px]"
        )}
      >
        <h2
          className={cn(
            "text-body-md font-bold tracking-[-0.02em] text-gray-900",
            "tablet:text-body-lg",
            "pc:text-body-lg"
          )}
        >
          Sentinel Carbernet Sauvignon 2016
        </h2>
        <p className="text-body-sm tracking-[-0.02em] text-gray-500">
          Western Cape, South Africa
        </p>
      </div>
    </div>
  );
};

export default ReviewInfo;
