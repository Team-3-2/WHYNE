export type ButtonShape = "default" | "round" | "square";
export type ButtonState = "default" | "outline" | "secondary";
export type ButtonTextColor = "default" | "outline" | "secondary";

export const COMMON_BUTTON_STYLES =
  "group w-full h-[42px] tablet:h-[50px] pc:h-[50px] inline-flex flex-center gap-x-[8px] tablet:gap-x-[12px] pc:gap-x-[12px] whitespace-nowrap transition-colors disabled:pointer-events-none";

export const BUTTON_SHAPE_VARIANTS = {
  default: "rounded-[4px] px-[23px]",
  round: "rounded-full w-[48px] h-[48px] active:text-gray-100",
  square:
    "rounded-[8px] w-[42px] tablet:w-[50px] pc:w-[50px] active:text-gray-100",
};

export const BUTTON_STATE_VARIANTS = {
  default:
    "bg-black hover:bg-default active:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-600",
  outline:
    "bg-white border border-gray-300 hover:bg-gray-100 active:bg-gray-200 disabled:border-gray-300",
  secondary:
    "bg-white border border-gray-200 hover:bg-gray-100 active:bg-gray-600 disabled:border-gray-300 disabled:text-gray-400",
};

export const BUTTON_TEXT_COLOR_VARIANTS = {
  default:
    "text-gray-100 mobile:text-button-md tablet:text-button-lg pc:text-button-lg group-disabled:text-gray-600 group-disabled:bg-gray-300",
  outline:
    "text-default mobile:text-button-md tablet:text-button-lg pc:text-button-lg group-disabled:text-gray-400",
  secondary: "text-gray-800 group-disabled:text-gray-400",
};
