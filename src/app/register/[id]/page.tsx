import { cn } from "@/lib/utils";
import RegisterWine from "../_components/register-wine";

const Page = () => {
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
      <RegisterWine />
    </div>
  );
};

export default Page;
