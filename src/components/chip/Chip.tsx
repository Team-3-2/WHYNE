"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ChipProps {
  img?: string;
  label: string;
}

const Chip = ({ img, label }: ChipProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      data-selected={selected}
      aria-pressed={selected}
      className={cn(
        "flex-center h-[38px] cursor-pointer rounded-full border text-body-sm tracking-[-0.02em]",
        "transition-colors duration-150 ease-in-out hover:bg-gray-100 hover:text-black",
        "data-[selected=true]:bg-gray-800 data-[selected=true]:text-white data-[selected=true]:hover:bg-gray-800 data-[selected=true]:hover:text-white",
        "pc:h-[48px] pc:text-body-md",
        img
          ? "gap-2 pl-2 pr-4 mobile:gap-[6px] mobile:pr-3"
          : "px-[18px] mobile:px-3"
      )}
      onClick={() => setSelected(!selected)}
    >
      {img && (
        <Image
          src={img}
          alt={`${label} 이미지`}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full mobile:h-6 mobile:w-6"
        />
      )}
      <span>{label}</span>
    </button>
  );
};

export default Chip;
