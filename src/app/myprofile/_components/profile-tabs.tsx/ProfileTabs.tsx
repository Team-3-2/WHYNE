import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProfileTabsProps {
  tab: string;
  setTab: (tab: string) => void;
}

const tabs = [
  {
    label: "내가 쓴 후기 8",
    href: "review",
  },
  {
    label: "내가 등록한 와인 4",
    href: "registered",
  },
];

const ProfileTabs = ({ tab, setTab }: ProfileTabsProps) => {
  return (
    <nav
      aria-label="프로필 탭 메뉴"
      className={cn(
        "flex w-full items-center justify-start gap-5 pb-[14px] pl-1",
        "tablet:gap-8 tablet:pb-[18px] tablet:pl-5",
        "pc:h-[85px] pc:gap-8 pc:pb-[18px] pc:pl-10"
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
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default ProfileTabs;
