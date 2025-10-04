"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/../public/logo.svg";
import { usePathname } from "next/navigation";

const LinkMenu = [
  {
    name: <Logo className="w-[100px]" />,
    href: "/",
    ariaLabel: "메인페이지 이동",
  },
  {
    name: "로그인",
    href: "/login",
    style: "underline-offset-2 hover:underline",
  },
];

const Gnb = () => {
  const pathname = usePathname();

  const isHidden = pathname === "/login" || pathname === "/signup";

  if (isHidden) return null;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex items-center justify-between bg-[#171A21]",
        "h-[60px] w-full gap-[10px] px-5 py-[15px]",
        "tablet:h-[70px] tablet:px-[30px] tablet:py-[11px]",
        "pc:h-[70px] pc:px-[300px] pc:py-[11px]"
      )}
    >
      {/* TODO(지권): 로그인 상태 추가 */}
      {LinkMenu.map((menu, i) => (
        <Link
          key={i}
          href={menu.href}
          aria-label={menu.ariaLabel}
          className={cn(
            "flex items-center leading-[26px] text-white",
            menu.style
          )}
        >
          {menu.name}
        </Link>
      ))}
    </header>
  );
};

export default Gnb;
