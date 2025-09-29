"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  items: { label: string; href?: string; onClick?: () => void }[];
}

const style = {
  itemBase:
    "flex-center h-full w-full rounded-md text-[16px] leading-[26px] text-gray-800 transition-colors hover:bg-gray-200",
};

function DropdownMenu({ items }: DropdownMenuProps) {
  const pathname = usePathname();

  const isActive = (href?: string) => Boolean(href && pathname === href);

  return (
    <div
      className={cn(
        "flex-col-center rounded-[4px] border border-gray-300 bg-white p-[3px] shadow-md",
        "h-[92px] w-[101px]",
        "tablet:h-[90px] tablet:w-[126px]",
        "pc:h-[90px] pc:w-[126px]"
      )}
    >
      {items.map(({ label, href, onClick }) =>
        href ? (
          <Link
            key={label}
            href={href}
            className={cn(
              style.itemBase,
              isActive(href) && "bg-gray-800 text-white"
            )}
          >
            {label}
          </Link>
        ) : (
          <button key={label} onClick={onClick} className={style.itemBase}>
            {label}
          </button>
        )
      )}
    </div>
  );
}

export default DropdownMenu;
