import { cn } from "@/lib/utils";
import RegisterWine from "../_components/register-wine";
import { createPageInfoMetadata } from "@/constants/metadata";
import type { Metadata } from "next";
import getRegisterWine from "@/api/register/get-register-wine";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  let title = "와인 등록하기";
  let wineData = null;
  if (Number(id)) {
    const wineData = await getRegisterWine(id);
    if (wineData) {
      title = `${wineData.name} 와인 수정하기`;
    } else {
      title = "와인 수정";
    }
  }
  const DESCRIPTION = wineData
    ? "와인 정보 수정 페이지"
    : "새 와인 등록 페이지";

  return createPageInfoMetadata(title, DESCRIPTION);
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
    <div
      className={cn(
        "bg-gray-200 bg-[url('/images/common/bg-main.png')] bg-cover bg-no-repeat px-[16px] py-[35px]",
        "tablet:py-[70px]",
        "pc:py-[70px]"
      )}
    >
      <div className="container mt-[60px] flex max-w-[480px] flex-col gap-6 overflow-hidden rounded-2xl bg-white py-8 drop-shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        <p
          className={cn(
            "w-fit px-6 text-default mobile:text-heading-md",
            "tablet:text-heading-lg",
            "pc:text-heading-lg"
          )}
        >
          {wineData ? "와인 수정" : "와인 등록"}
        </p>
        <div className="px-6">
          <RegisterWine wineData={wineData} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Page;
