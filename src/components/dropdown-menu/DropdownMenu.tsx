"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const style = {
  itemBase:
    "flex-center h-full w-full rounded-md text-[16px] leading-[26px] text-gray800 transition-colors hover:bg-whiteHover active:bg-gray200",
};

function DropdownMenu() {
  const pathname = usePathname();

  const isActive = (href?: string) => Boolean(href && pathname === href);

  const items: { label: string; href?: string; onClick?: () => void }[] = [
    { label: "마이페이지", href: "/my-page" },
    { label: "로그아웃", onClick: () => console.log("logout") },
  ];

  return (
    <div
      className={cn(
        "flex-col-center rounded-[4px] border border-gray300 p-[3px] shadow-md",
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
              isActive(href) && "bg-gray800 text-white"
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
