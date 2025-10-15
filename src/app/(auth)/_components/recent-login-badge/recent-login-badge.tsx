import { cn } from "@/lib/utils";

const RecentLoginBadge = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "animate-floatY relative rounded-[12px] bg-black px-3 py-2 text-[12px] font-semibold leading-[16px] tracking-[-0.02em] text-white",
          "before:absolute before:left-0 before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-black"
        )}
      >
        최근 로그인
      </span>
    </div>
  );
};

export default RecentLoginBadge;
