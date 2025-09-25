import { cn } from "@/lib/utils";
import Link from "next/link";

const LinkMenu = [
  { name: "WINE", href: "/" },
  {
    name: "로그인",
    href: "/login",
    style: "underline-offset-2 hover:underline",
  },
];

const Header = () => {
  return (
    <header
      className={cn(
        "rounded-4 fixed left-1/2 top-10 flex h-[70px] -translate-x-1/2 items-center justify-between bg-black",
        "w-[343px] sm:h-[50px] sm:gap-[10px] sm:rounded-[12px] sm:px-5 sm:py-[15px]",
        "md:w-[704px] md:px-[60px] md:py-[11px]",
        "lg:w-[1140px]"
      )}
    >
      {/* TODO(지권): 로고 아이콘 추가 및 로그인 상태 추가 */}
      {LinkMenu.map((menu) => (
        <Link
          key={menu.name}
          href={menu.href}
          className={cn("leading-[26px] text-white", menu.style)}
        >
          {menu.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
