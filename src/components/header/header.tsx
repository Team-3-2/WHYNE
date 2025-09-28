import { cn } from "@/lib/utils";

interface HeaderProps {
  review: string;
  title: string;
  description: string;
  price: string;
}

const Header = ({ review, title, description, price }: HeaderProps) => {
  return (
    <div
      className={cn(
        "flex-col-center min-h-[182px] w-full gap-6",
        "tablet:min-h-[220px] tablet:w-[304px] tablet:gap-8",
        "pc:min-h-[248px] pc:w-[496px] pc:gap-8"
      )}
    >
      <div
        className={cn(
          "mr-auto flex flex-col gap-[6px]",
          "tablet:gap-[8px]",
          "pc:gap-[14px]"
        )}
      >
        <div className="flex items-center gap-4">
          {/* TODO(지권): 별 아이콘 추가 필요 */}
          <div>⭐️⭐️⭐️⭐️</div>
          <p className={cn("text-body-sm text-secondary", "pc:text-body-md")}>
            <span>{review}</span>개의 후기
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h1
            className={cn(
              "text-title-page-sm tracking-[-0.02em] text-default",
              "pc:text-title-page-md"
            )}
          >
            {title}
          </h1>
          <span className="text-body-lg leading-6 tracking-[-0.02em] text-secondary">
            {description}
          </span>
        </div>
      </div>
      <div className="ml-auto text-body-md text-default">
        <span>{price}</span>원
      </div>
    </div>
  );
};

export default Header;
