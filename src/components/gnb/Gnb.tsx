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

const Gnb = () => {
  return (
    <header
      className={cn(
        "fixed left-1/2 top-10 flex -translate-x-1/2 items-center justify-between bg-black",
        "h-[50px] w-[343px] gap-[10px] rounded-[12px] px-5 py-[15px]",
        "tablet:rounded-4 tablet:h-[70px] tablet:w-[704px] tablet:px-[60px] tablet:py-[11px]",
        "pc:rounded-4 pc:h-[70px] pc:w-[1140px] pc:px-[60px] pc:py-[11px]"
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

export default Gnb;
