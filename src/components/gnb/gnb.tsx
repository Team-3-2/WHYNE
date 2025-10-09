"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/../public/logo.svg";
import { usePathname } from "next/navigation";
import instance from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import { User } from "@/types/user-type";
import { useLogout } from "@/hooks/use-logout";
import useUserStore from "@/store/user-store";

const Gnb = () => {
  const pathname = usePathname();
  // const [user, setUser] = useState<User>();
  const { user, setUser, clearUser } = useUserStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const isHidden = pathname === "/login" || pathname === "/signup";

  const logout = useLogout();
  const dropDownMenuItems = [
    { label: "마이프로필", href: "/myprofile" },
    {
      label: "로그아웃",
      onClick: () => {
        setIsOpen(false);
        logout();
        // clearUser();
      },
    },
  ];

  // TODO(지권): 로그인 상태 확인 리팩토링 필요
  const getMe = async () => {
    try {
      const response = await instance.get("/users/me");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getMe();
  }, []);

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
      <Link
        href="/"
        aria-label="메인페이지 이동"
        className="flex items-center leading-[26px] text-white"
      >
        <Logo className="w-[100px]" />
      </Link>

      <div className="relative">
        {user ? (
          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center"
          >
            <Image
              src={user?.image || "/images/profile/default-profile.svg"}
              alt="프로필 이미지"
              width={45}
              height={45}
              className="rounded-full"
            />
          </button>
        ) : (
          <Link
            href="/login"
            className="leading-[26px] text-white underline-offset-2 hover:underline"
          >
            로그인
          </Link>
        )}

        {isOpen && (
          <div className="absolute right-0 z-[60] mt-2">
            <DropdownMenu
              items={dropDownMenuItems}
              itemClassName="hover:text-black"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Gnb;
