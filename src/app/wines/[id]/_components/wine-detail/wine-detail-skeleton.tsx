import { cn } from "@/lib/utils";

export default function WineDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className={cn(
          "mx-auto w-full animate-pulse px-4 py-8",
          "tablet:px-8 tablet:py-12",
          "pc:max-w-7xl pc:px-16 pc:py-16"
        )}
      >
        {/* 헤더 스켈레톤 */}
        <div
          className={cn(
            "flex flex-col gap-6",
            "tablet:flex-row tablet:gap-8",
            "pc:gap-12"
          )}
        >
          {/* 이미지 */}
          <div
            className={cn(
              "h-[300px] w-full rounded-lg bg-gray-200",
              "tablet:h-[420px] tablet:w-[280px]",
              "pc:h-[525px] pc:w-[350px]"
            )}
          />

          {/* 정보 */}
          <div className="flex-1 space-y-4">
            <div className="h-6 w-32 rounded bg-gray-200" />
            <div className="h-10 w-3/4 rounded bg-gray-200" />
            <div className="h-6 w-1/2 rounded bg-gray-200" />
            <div className="h-24 w-full rounded bg-gray-200" />
            <div className="h-8 w-40 rounded bg-gray-200" />
          </div>
        </div>

        {/* 섹션 스켈레톤들 */}
        <div className="mt-12 space-y-8">
          <div className="h-64 rounded-lg bg-gray-200" />
          <div className="h-48 rounded-lg bg-gray-200" />
          <div className="h-96 rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
