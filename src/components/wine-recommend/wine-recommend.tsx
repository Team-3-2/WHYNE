import { recommendwinemock } from "@/mock";
import CarouselNavButton from "../button/carousel-nav-button";
const data = recommendwinemock;

const WineRecommend = () => {
  return (
    <div>
      <h2>이번달 추천 와인</h2>
      <div>
        <CarouselNavButton slide="prev" />
        {/*disabled={isLoading}
          onClick={() => setIndex(index - 1)} */}
        {/*
        data.map 
        {data?.map(({ id, name, region, image }) => (
            <RecommendWineCard
            key={id}
            id={id}
            name={name}
            region={region}
            image={image}
          />
          ))}
        */}
        <CarouselNavButton slide="next" />
        {/*        
          disabled={isLoading}
          onClick={() => setIndex(index + 1)}
        */}
      </div>
    </div>
  );
};

export default WineRecommend;
