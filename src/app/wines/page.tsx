import getRecommendedWines from "@/api/wines/get-recommended";
import RecommendWineSlider from "@/components/wine-recommend/wine-recommend";

const WineListPage = async () => {
  const wines = await getRecommendedWines(10);

  return (
    <>
      <div className="bg-gray-200">
        <h2>와인 목록</h2>
        <RecommendWineSlider wines={wines} />
      </div>
      <div className="h-[400px] bg-gray-300">ㅇㅇㅇ</div>
    </>
  );
};

export default WineListPage;
