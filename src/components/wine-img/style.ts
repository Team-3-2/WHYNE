import { cn } from "@/lib/utils";

export const REGISTER_STYLES = {
  label: cn(
    "group relative h-[140px] w-[140px] overflow-hidden",
    "cursor-pointer rounded-[4px] border border-gray-300",
    "after:z-[2] after:top-0 after:left-0 after:opacity-0 after:duration-100 after:absolute after:[backdrop-filter:blur(4px)] after:rounded-[4px] after:bg-[rgba(233,233,233,0.7)] after:w-full after:h-full",
    "hover:bg-gray-100 hover:after:opacity-100",
    "active:bg-gray-200"
  ),

  img: cn("object-contain p-[10px]"),
  icon: cn(
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 z-[3]"
  ),
};
