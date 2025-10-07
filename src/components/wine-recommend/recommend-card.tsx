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
        className="aspect-[62px/228px] bg-[transparent] p-[0px]"
      />
      <CardInfo name={wine.name} region={wine.region} />
    </div>
  );
};
export default RecommendCard;
