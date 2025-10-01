import { cn } from "@/lib/utils";

type RecommendWineProps = {
  id: number;
  name: string;
  region: string;
  image: string;
};

const RecommendWineCard = ({ id, name, region, image }: RecommendWineProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[243px] w-[150px] shrink-0 select-none flex-col items-center",
        "tablet:h-[320px] tablet:w-[201px]",
        "pc:h-[320px] pc:w-[201px]"
      )}
    >
      <img
        className={cn(
          "mx-auto h-[165px] w-auto object-contain",
          "tablet:h-[228px]",
          "pc:h-[228px]"
        )}
        src={image}
        alt={name}
      />
      <h2
        className={cn(
          "line-clamp-2 pt-[12px] text-center text-sm tracking-[-0.02em] text-gray-900",
          "tablet:h-16 tablet:pt-4 tablet:text-body-md",
          "pc:h-16 pc:pt-4 pc:text-body-md"
        )}
      >
        {name}
      </h2>
      <p
        className={cn(
          "bottom-0 line-clamp-1 pt-[6px] text-center text-[12px] leading-5 tracking-[-0.02em] text-gray-500",
          "tablet:pt-2 tablet:text-sm",
          "pc:pt-2 pc:text-sm"
        )}
      >
        {region}
      </p>
    </div>
  );
};

export default RecommendWineCard;
