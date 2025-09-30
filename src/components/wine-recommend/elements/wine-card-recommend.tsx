type WineType = "white" | "sparkling" | "red";

type Wine = {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: WineType;
  avgRating: number;
  reviewCount: number;
  recentReview: any[];
};
type RecommendWineProps = {
  id: number;
  name: string;
  region: string;
  image: string;
};

const RecommendWineCard = ({ id, name, region, image }: RecommendWineProps) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{region}</p>
    </div>
  );
};

export default RecommendWineCard;
