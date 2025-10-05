import RecommendWineCard from "./wine-card-recommend";

export default {
  title: "Components/RecommendWineCard",
  component: RecommendWineCard,
};

const sampleData = {
  id: 1,
  name: "Château d'Yquem",
  region: "Sauternes, France",
  image:
    "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1435/1750149018549/16.png",
};

const sampleDataLong = {
  id: 2,
  name: "갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 ",
  region:
    "한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국",
  image:
    "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1875/1757514585126/03d962d3-06b6-4c18-b0ca-01d22c49737d.jpg",
};

export const Default = () => <RecommendWineCard {...sampleData} />;

export const Long = () => <RecommendWineCard {...sampleDataLong} />;
