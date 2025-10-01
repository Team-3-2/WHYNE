import { cn } from "@/lib/utils";

type RecommendWineProps = {
  id: number;
  name: string;
  region: string;
  image: string;
};

const card_text_design =
  "tracking-[-0.02em] pt-[6px] tablet:pt-2 pc:pt-2  tablet:max-h-[48px] pc:max-h-[48px]";

const RecommendWineCard = ({ id, name, region, image }: RecommendWineProps) => {
  return (
    <div
      className={cn(
        "flex h-[243px] w-[150px] flex-col items-center",
        "tablet:h-[320px] tablet:w-[201px]",
        "pc:h-[320px] pc:w-[201px]"
      )}
    >
      <img
        className={cn(
          "mx-auto h-[165px] w-auto object-contain pb-[6px]",
          "tablet:h-[228px] tablet:pb-2",
          "pc:h-[228px] pc:pb-2"
        )}
        src={image}
        alt={name}
      />
      <h2
        className={cn(
          "line-clamp-2 max-h-10 text-center text-sm text-gray-900",
          "tablet:max-h-12 tablet:text-body-md",
          "pc:max-h-12 pc:text-body-md",
          card_text_design
        )}
      >
        {name}
      </h2>
      <p
        className={cn(
          "line-clamp-1 max-h-10 text-center text-[12px] leading-5 text-gray-500",
          "tablet:text-sm",
          "pc:text-sm",
          card_text_design
        )}
      >
        {region}
      </p>
    </div>
  );
};

export default RecommendWineCard;
