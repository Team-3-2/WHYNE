import CardImg from "@/components/card/card-img";
import CardInfo from "@/components/card/card-info";

interface RecommendCardProps {
  wine: {
    image: string;
    name: string;
    region: string;
  };
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
