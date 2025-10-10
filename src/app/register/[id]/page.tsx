import { cn } from "@/lib/utils";
import RegisterWine from "../_components/register-wine";
import getRegisterWine from "@/api/wines/get-register-wine";

interface WineFormData {
  name: string;
  region: string;
  image: string;
  price: number;
  type: string;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let wineData = null;

  if (Number(id)) {
    const data = await getRegisterWine(id);

    if (data) {
      wineData = data;
    }
  }

  return (
    <div className="container mt-[60px] flex flex-col gap-6 py-8 tablet:mt-[70px] pc:mt-[70px]">
      <p
        className={cn(
          "w-fit px-6 text-default mobile:text-heading-md",
          "tablet:text-heading-lg",
          "pc:text-heading-lg"
        )}
      >
        와인 등록
      </p>
      <RegisterWine wineData={wineData} />
    </div>
  );
};

export default Page;
