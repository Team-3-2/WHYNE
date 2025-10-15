import { cn } from "@/lib/utils";

const RecentLoginBadge = () => {
  return (
    <div className="relative inline-block">
      <span
        className={cn(
          "relative rounded-[12px] bg-black px-3 py-2 text-body-sm text-white",
          "before:absolute before:left-0 before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-black"
        )}
      >
        최근 로그인
      </span>
    </div>
  );
};

export default RecentLoginBadge;
