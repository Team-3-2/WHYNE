"use client";

import { WINE_TYPE } from "../../_constants/wine-type";
import { useUpdateQuery } from "../../_utils/use-update-query";
import { cn } from "@/lib/utils";
import Image from "next/image";
import redWine from "@/../public/images/wine-type/red.jpg";
import whiteWine from "@/../public/images/wine-type/white.jpg";
import sparklingWine from "@/../public/images/wine-type/sparkling.jpg";

const imgMap = {
  Red: redWine,
  White: whiteWine,
  Sparkling: sparklingWine,
} as const;

type WineType = keyof typeof imgMap;

const TypeItem = ({
  item,
  selectedType,
  handleTypeClick,
}: {
  item: WineType;
  selectedType: string;
  handleTypeClick: (type: string) => void;
}) => {
  return (
    <div
      className="border-border-secondary flex h-[48px] w-fit items-center rounded-full border bg-white"
      onClick={() => handleTypeClick(item)}
    >
      <input type="radio" value={item} className="peer hidden" />
      <label
        htmlFor={item}
        className={cn(
          "flex-center cursor-pointer select-none gap-2 rounded-full py-2 pl-2 pr-3 text-default hover:bg-gray-700 hover:text-white pc:pr-4",
          "peer-checked:bg-gray-800 peer-checked:text-white",
          selectedType !== "" &&
            selectedType === item &&
            "bg-gray-800 text-white"
        )}
      >
        <Image
          className="h-8 w-8 rounded-full object-cover"
          src={imgMap[item]}
          width={24}
          height={24}
          alt="타입"
          draggable={false}
        />
        <span className="text-body-sm tracking-[-0.02em] tablet:text-body-md pc:text-body-md">
          {item}
        </span>
      </label>
    </div>
  );
};

const TypeOption = () => {
  const { setQuery, searchParams } = useUpdateQuery();
  const selectedType = searchParams.get("type") ?? "";

  // 타입 선택 핸들러
  const handleTypeClick = (type: string) => {
    setQuery((params) => {
      if (selectedType === type) {
        params.delete("type");
      } else {
        params.set("type", type);
      }
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-body-lg">타입</h2>
      <div className="flex gap-2 pc:flex-col">
        {(WINE_TYPE as WineType[]).map((item) => (
          <TypeItem
            key={item}
            item={item}
            selectedType={selectedType}
            handleTypeClick={handleTypeClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeOption;
