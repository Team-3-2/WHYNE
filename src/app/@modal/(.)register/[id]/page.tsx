import getRegisterWine from "@/api/register/get-register-wine";
import RegisterWine from "@/app/register/_components/register-wine";
import PageModal from "@/components/modal/page-modal";

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
    <PageModal
      title={wineData ? "와인 수정" : "와인 등록"}
      className="tablet:h-[767px] tablet:w-[460px] pc:h-[767px] pc:w-[460px]"
    >
      <RegisterWine wineData={wineData} id={id} />
    </PageModal>
  );
};

export default Page;
