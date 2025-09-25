"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface DropdownMenuProps {
  size: "small" | "large";
}

const DropdownMenu = ({ size = "large" }: DropdownMenuProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div
      className={cn(
        "flex-col-center rounded-[4px] border border-gray300 p-[3px] shadow-md",
        size === "small" ? "h-[92px] w-[101px]" : "h-[90px] w-[126px]"
      )}
    >
      <Link
        href="/my-page"
        className={cn(
          "flex-center h-full w-full rounded-md text-[16px] leading-[26px] text-gray800 transition-colors hover:bg-whiteHover",
          isActive("/my-page") && "bg-gray800 text-white"
        )}
      >
        마이페이지
      </Link>
      <button className="flex-center active:bg-gray200 h-full w-full rounded-md text-[16px] leading-[26px] text-gray800 transition-colors hover:bg-whiteHover">
        로그아웃
      </button>
    </div>
  );
};

export default DropdownMenu;
