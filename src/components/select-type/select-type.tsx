import { cn } from "@/lib/utils";
import Image from "next/image";
import redWine from "../../../public/images/wine-type/red.jpg";
import whiteWine from "../../../public/images/wine-type/white.jpg";
import sparklingWine from "../../../public/images/wine-type/sparkling.jpg";
import { ComponentProps } from "react";

const imgMap = {
  RED: redWine,
  WHITE: whiteWine,
  SPARKLING: sparklingWine,
} as const;

type WineType = keyof typeof imgMap;

interface SelectTypeValue extends ComponentProps<"input"> {
  isError: boolean;
}

const TypeInput = ({ name }: { name: WineType }) => {
  const imgSrc = imgMap[name] || "";

  return (
    <div
      className={cn(
        "h-[38px]",
        "rounded-full border border-border-secondary",
        "flex items-center",
        "bg-white",
        "pc:h-[48px]"
      )}
    >
      <input
        type="radio"
        id={name}
        value={name}
        name="wine-type"
        className="peer hidden"
      />
      <label
        htmlFor={name}
        className={cn(
          "py-[7px] pl-2 pr-3",
          "flex items-center justify-center gap-[6px]",
          "cursor-pointer rounded-full",
          "text-default hover:bg-gray100",
          "peer peer-checked:bg-gray800 peer-checked:text-white"
        )}
      >
        <Image
          className={cn("h-6 rounded-full object-cover", "pc:h-8 pc:w-8")}
          src={imgSrc}
          width={24}
          height={24}
          alt="레드와인"
          draggable={false}
        />
        <span className="text-body-sm tracking-[-0.02em] pc:text-body-md">
          {name}
        </span>
      </label>
    </div>
  );
};

const SelectType = ({ isError, ...props }: SelectTypeValue) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <p className="text-body-sm tracking-[-0.02em] text-default">타입</p>
        {isError && (
          <p className="text-component-notes-md tracking-[-0.02em] text-danger">
            와인 타입은 필수 입력이에요
          </p>
        )}
      </div>
      <div className="flex gap-[10px]" {...props}>
        <TypeInput name="RED" />
        <TypeInput name="WHITE" />
        <TypeInput name="SPARKLING" />
      </div>
    </div>
  );
};

export default SelectType;
