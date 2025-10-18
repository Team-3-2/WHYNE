import { AromaKey } from "@/types/aroma-type";
import Image from "next/image";
import { aromaMap } from "./aroma-map";
import { cn } from "@/lib/utils";

interface FlavorItemProps {
  aroma: AromaKey;
  className?: string;
}
const FlavorItem = ({ aroma, className }: FlavorItemProps) => {
  const { img, label } = aromaMap[aroma];
  return (
    <div className={cn("flex shrink-0 flex-col items-center gap-3", className)}>
      <Image
        src={img}
        alt={label}
        width={100}
        height={100}
        className="rounded-4"
        draggable={false}
      />
      <span className="select-none text-body-md tracking-[-0.02em]">
        {label}
      </span>
    </div>
  );
};
interface FlavorProps {
  count: number;
  items: AromaKey[];
  showHeader?: boolean;
}
const Flavor = ({ count, items, showHeader = true }: FlavorProps) => {
  return (
    <div className="flex min-h-[197px] w-full flex-col items-start justify-between gap-4">
      {showHeader && (
        <div>
          <h2 className="text-heading-lg tracking-[-0.48px] text-gray-900">
            어떤 향이 있나요?
          </h2>
          <span className="text-body-sm tracking-[-0.28px] text-gray-400">
            (<span>{count}</span>명 참여)
          </span>
        </div>
      )}
      <div className="scrollbar-hide overflow-hidden">
        <div className="flex flex-nowrap gap-4 tablet:gap-3 pc:gap-3">
          {items.map((item, index) => (
            <FlavorItem
              aroma={item}
              key={index}
              className={cn(index === 3 && "hidden tablet:hidden pc:flex")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Flavor;
