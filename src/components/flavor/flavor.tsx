import { AromaKey } from "@/types/aroma-type";
import Image from "next/image";
import { aromaMap } from "./aroma-map";

interface FlavorItemProps {
  aroma: AromaKey;
}

const FlavorItem = ({ aroma }: FlavorItemProps) => {
  const { img, label } = aromaMap[aroma];
  return (
    <div className="flex shrink-0 flex-col items-center gap-[14px] tablet:w-[100px] pc:w-[100px]">
      <Image
        src={img}
        alt={label}
        width={90}
        height={90}
        className="rounded-4 h-[90px] w-full tablet:h-[100px] pc:h-[100px]"
      />
      <span className="text-body-md tracking-[-0.02em]">{label}</span>
    </div>
  );
};

interface FlavorProps {
  count: number;
  items: AromaKey[];
}

const Flavor = ({ count, items }: FlavorProps) => {
  return (
    <div className="flex min-h-[197px] w-full flex-col items-start justify-between gap-[17px]">
      <div>
        <h2 className="text-heading-lg tracking-[-0.48px] text-gray-900">
          어떤 향이 있나요?
        </h2>
        <span className="text-body-sm tracking-[-0.28px] text-gray-400">
          (<span>{count}</span>명 참여)
        </span>
      </div>

      <div className="scrollbar-hide w-[calc(3*90px+2*14px+16px)] overflow-x-auto tablet:w-[calc(4*100px+2*14px+2*16px)] pc:w-[calc(4*100px+2*14px+2*16px)]">
        <div className="flex flex-nowrap gap-4">
          {items.map((item, index) => (
            <FlavorItem aroma={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavor;
