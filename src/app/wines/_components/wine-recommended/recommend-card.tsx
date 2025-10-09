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
        className="mt-[12px] !p-0 text-center tablet:mt-[16px] pc:mt-[16px]"
        nameClassName="mobile:text-body-sm tablet:text-body-md pc:text-body-md text-default"
        regionClassName="text-caption tablet:text-body-sm pc:text-body-sm text-secondary tablet:mt-[8px] pc:mt-[8px]"
      />
    </div>
  );
};
export default RecommendCard;
