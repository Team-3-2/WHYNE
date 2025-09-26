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
    <section className="w-[849px]">
      <div className="flex items-center gap-8 pb-[18px] pl-10">
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
      </div>
      <hr />
    </section>
  );
};

export default ProfileTabs;
