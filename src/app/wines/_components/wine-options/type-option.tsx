"use client";

import { TypeInput } from "@/components/select-type/select-type";
import { WINE_TYPE } from "../../_constants/wine-type";
import { useUpdateQuery } from "../../_utils/use-update-query";

const TypeOption = () => {
  const { setQuery, searchParams } = useUpdateQuery();
  const selectedType = searchParams.get("type") ?? "";

  // 타입 선택 핸들러
  const handleTypeClick = (type: string) => {
    if (selectedType === type) return;

    setQuery((params) => {
      params.set("type", type);
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-body-lg">타입</h2>
      <div className="flex flex-col gap-2">
        {WINE_TYPE.map((item: string) => (
          <TypeInput
            key={item}
            name={item as "SPARKLING" | "WHITE" | "RED"}
            onClick={() => handleTypeClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeOption;
