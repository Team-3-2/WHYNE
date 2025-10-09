"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";

interface ChipProps {
  label: string;
  selected?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

function ChipBase({
  label,
  selected = false,
  onToggle,
  disabled,
  "aria-label": ariaLabel,
}: ChipProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggle}
      data-selected={selected}
      aria-pressed={selected}
      aria-label={ariaLabel ?? `${label} 선택`}
      className={cn(
        "flex-center h-[38px] cursor-pointer rounded-full border px-[12px] text-body-sm tracking-[-0.02em]",
        "transition-colors duration-150 ease-in-out hover:bg-gray-100 hover:text-black",
        "data-[selected=true]:bg-gray-800 data-[selected=true]:text-white data-[selected=true]:hover:bg-gray-800 data-[selected=true]:hover:text-white",
        "pc:h-[48px] pc:px-[18px] pc:text-body-md"
      )}
    >
      <span>{label}</span>
    </button>
  );
}

const Chip = memo(ChipBase);
export default Chip;
