export type ButtonShape = "default" | "round" | "square";
export type ButtonState = "default" | "outline" | "secondary";

export const COMMON_BUTTON_STYLES = {
  base: "w-full h-[42px] tablet:h-[50px] pc:h-[50px] text-button-md tablet:text-button-lg pc:text-button-lg",
};

export const BUTTON_SHAPE_VARIANTS = {
  default: "rounded-[4px]",
  round: "rounded-full w-[48px] h-[48px]",
  square: "rounded-[8px] w-[42px] tablet:w-[50px] pc:w-[50px]",
};

export const BUTTON_STATE_VARIANTS = {
  default:
    "bg-black text-gray-100 hover:bg-default active:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-600",
  outline:
    "bg-white text-default border border-gray-300 hover:bg-gray-100 active:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400",
  secondary: "bg-white border border-gray-200",
};
