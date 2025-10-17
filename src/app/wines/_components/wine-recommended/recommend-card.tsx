import { cn } from "@/lib/utils";
import CardImg from "@/components/card/card-img";
import CardInfo from "@/components/card/card-info";
import { CardItem } from "@/types/card-item-type";

/**
 * [이번 달 추천 와인] 카드 컴포넌트
 * @author yeonsu
 * @param wine : 카드에 표시할 와인 정보(CardItem 타입)
 */

interface RecommendCardProps {
  wine: CardItem;
}

const RecommendCard = ({ wine }: RecommendCardProps) => {
  return (
    <div>
      <CardImg
        src={wine.image}
        alt={wine.name}
        className="!aspect-[1/1.13] !bg-[transparent] !p-[0px]"
      />
      <CardInfo
        name={wine.name}
        region={wine.region}
        className={cn(
          "mt-[12px] !px-[10px] !py-[0px] text-center",
          "tablet:mt-[16px]",
          "pc:mt-[16px]"
        )}
        nameClassName={cn(
          "mobile:text-body-sm text-default",
          "tablet:text-body-md",
          "pc:text-body-md"
        )}
        regionClassName={cn(
          "text-caption text-secondary",
          "tablet:text-body-sm tablet:mt-[8px]",
          "pc:text-body-sm pc:mt-[8px]"
        )}
      />
    </div>
  );
};
export default RecommendCard;
