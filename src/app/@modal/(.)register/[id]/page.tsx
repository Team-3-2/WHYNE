import getRegisterWine from "@/api/wines/get-register-wine";
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
    <PageModal title="와인 등록">
      <RegisterWine wineData={wineData} />
    </PageModal>
  );
};

export default Page;
