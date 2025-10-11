import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProfileTabsProps {
  tab: string;
  setTab: (tab: string) => void;
  reviewTotal: number;
  registeredTotal?: number; // 옵셔널만 제거해주세요
}

const ProfileTabs = ({
  tab,
  setTab,
  reviewTotal,
  registeredTotal,
}: ProfileTabsProps) => {
  const tabs = [
    {
      label: `내가 쓴 후기 ${reviewTotal || 0}`,
      href: "review",
    },
    {
      label: `내가 등록한 와인 ${registeredTotal || 0}`,
      href: "registered",
    },
    {
      label: "내 계정",
      href: "account",
    },
  ];

  return (
    <nav
      aria-label="프로필 탭 메뉴"
      className={cn(
        "sticky top-[60px] z-40 flex w-full items-center justify-start gap-5 overflow-x-auto whitespace-nowrap border-b border-gray-300 bg-white pb-[14px] pl-1 pt-4",
        "tablet:top-[70px] tablet:gap-8 tablet:pb-[18px] tablet:pl-5 tablet:pt-[18px]",
        "pc:top-[70px] pc:h-[85px] pc:items-end pc:gap-8 pc:pb-[18px]"
      )}
    >
      {tabs.map((item) => (
        <Link
          key={item.href}
          href={`/myprofile?tab=${item.href}`}
          onClick={() => setTab(item.href)}
          className={cn(
            "!text-heading-md tracking-[-0.02em]",
            tab === item.href ? "text-gray-900" : "text-gray-300"
          )}
          replace
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default ProfileTabs;
