import { recommendwinemock } from "@/mock";
import ArrowButton from "@/components/button/arrow-button";
const data = recommendwinemock;

const WineRecommend = () => {
  return (
    <div>
      <h2>이번달 추천 와인</h2>
      <div>
        <ArrowButton direction="prev" />
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
        <ArrowButton direction="next" />
        {/*        
          disabled={isLoading}
          onClick={() => setIndex(index + 1)}
        */}
      </div>
    </div>
  );
};

export default WineRecommend;
