import { cn } from "@/lib/utils";

interface BlockGaugeProps {
  level: number; // 0-6 사이의 값 (0: 비어있음, 6: 가득 참)
  maxBlocks?: number; // 총 블록 수 (기본값: 6)
  color?: string; // 활성화된 블록 색상
  onChange?: (newLevel: number) => void; // 클릭 시 호출될 함수
}

const BlockGauge = ({
  level,
  maxBlocks = 6,
  color = "bg-black",
  onChange,
}: BlockGaugeProps) => {
  // 레벨이 범위를 벗어나지 않도록 조정
  const safeLevel = Math.max(0, Math.min(level, maxBlocks));

  // 블록 클릭 핸들러
  const handleClick = (clickedIndex: number) => {
    if (!onChange) return;

    const newLevel = clickedIndex + 1;
    // 같은 레벨을 클릭하면 0으로, 다른 레벨을 클릭하면 해당 레벨로
    onChange(newLevel === safeLevel ? 0 : newLevel);
  };

  return (
    <div className="flex w-full gap-0.5 tablet:gap-1 pc:gap-1">
      {Array.from({ length: maxBlocks }).map((_, index) => (
        <button
          key={index}
          type="button"
          style={{ flex: "1 0 0" }} // flex: 1 0 0 스타일 적용
          className={cn(
            // 높이 조정
            "h-2.5 tablet:h-2.5 pc:h-2.5",
            // 모서리 둥글기
            index === 0 ? "rounded-l-md" : "",
            index === maxBlocks - 1 ? "rounded-r-md" : "",
            // 활성화 여부에 따른 색상
            index < safeLevel ? color : "bg-neutral200",
            // 클릭 가능한 경우에만 호버 효과와 커서 추가
            onChange && [
              "cursor-pointer hover:opacity-80",
              "focus:outline-none focus:ring-2 focus:ring-gray600",
            ]
          )}
          onClick={() => handleClick(index)}
          disabled={!onChange} // onChange가 없으면 비활성화
        />
      ))}
    </div>
  );
};

export default BlockGauge;
