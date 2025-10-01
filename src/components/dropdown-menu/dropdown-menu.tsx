"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

/**
 * DropdownItem
 * @param label : 메뉴 라벨
 * @param href : 메뉴 href
 * @param onClick : 메뉴 클릭 이벤트
 * @param className : 메뉴 커스텀 클래스
 */

type DropdownItem = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

/**
 * DropdownMenuProps
 * @param items : 메뉴 아이템
 * @param itemClassName : 아이템 커스텀 클래스
 * @param activeClassName : 활성화된 아이템 커스텀 클래스
 */

interface DropdownMenuProps extends ComponentPropsWithoutRef<"div"> {
  items: DropdownItem[];
  itemClassName?: string;
  activeClassName?: string;
}

const style = {
  itemBase:
    "flex-center h-full w-full rounded-md text-[16px] leading-[26px] text-gray-800 transition-colors hover:bg-gray-200",
  rootBase:
    "flex-col-center rounded-[4px] border border-gray-300 bg-white p-[3px] shadow-md " +
    "h-[92px] w-[101px] tablet:h-[90px] tablet:w-[126px] pc:h-[90px] pc:w-[126px]",
};

/**
 *
 * @example
 * ```tsx
 * <div className="relative">
 *   <DropdownMenu
 *     className="absolute right-0 top-10 w-40"
 *     itemClassName="px-3 py-2"
 *     activeClassName="bg-black text-white"
 *     items={[
 *       { label: "수정하기", onClick: () => console.log("edit") },
 *       { label: "상세보기", href: "/detail/1" },
 *     ]}
 *     aria-label="옵션 메뉴"
 *   />
 * </div>
 * ```
 */

function DropdownMenu({
  items,
  className,
  itemClassName,
  activeClassName = "bg-gray-800 text-white",
  ...rest
}: DropdownMenuProps) {
  const pathname = usePathname();
  const isActive = (href?: string) => Boolean(href && pathname === href);

  return (
    <div className={cn(style.rootBase, className)} role="menu" {...rest}>
      {items.map(({ label, href, onClick, className: itemCustom }) =>
        href ? (
          <Link
            key={label}
            href={href}
            role="menuitem"
            className={cn(
              style.itemBase,
              itemClassName,
              itemCustom,
              isActive(href) && activeClassName
            )}
          >
            {label}
          </Link>
        ) : (
          <button
            key={label}
            type="button"
            onClick={onClick}
            role="menuitem"
            className={cn(style.itemBase, itemClassName, itemCustom)}
          >
            {label}
          </button>
        )
      )}
    </div>
  );
}

export default DropdownMenu;
