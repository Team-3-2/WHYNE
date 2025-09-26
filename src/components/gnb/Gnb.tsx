import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/../public/logo.svg";

const LinkMenu = [
  {
    name: <Logo className="w-[100px]" />,
    href: "/",
    ariaLabel: "메인페이지 이동",
  },
  {
    name: "로그인",
    href: "/login",
    ariaLabel: "로그인 페이지 이동",
    style: "underline-offset-2 hover:underline",
  },
];

const Gnb = () => {
  return (
    <header
      className={cn(
        "fixed left-1/2 top-0 flex -translate-x-1/2 items-center justify-between bg-black",
        "h-[50px] w-full gap-[10px] px-5 py-[15px]",
        "tablet:rounded-1 tablet:top-10 tablet:h-[70px] tablet:w-[704px] tablet:px-[60px] tablet:py-[11px]",
        "pc:rounded-1 pc:top-10 pc:h-[70px] pc:w-[1140px] pc:px-[60px] pc:py-[11px]"
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
