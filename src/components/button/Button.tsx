import { cn } from "@/lib/utils";

const COMMON_BUTTON_STYLES = {
  base: "w-full h-[42px] tablet:h-[50px] pc:h-[50px] text-button-md tablet:text-button-lg pc:text-button-lg",
};

const BUTTON_SHAPE_VARIANTS = {
  default: "rounded-[4px]",
  round: "rounded-full w-[48px] h-[48px]",
  square: "rounded-[8px] w-[42px] tablet:w-[50px] pc:w-[50px]",
};

const BUTTON_STATE_VARIANTS = {
  default:
    "bg-black text-gray-100 hover:bg-default active:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-600",
  outline:
    "bg-white text-default border border-gray-300 hover:bg-gray-100 active:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400",
  secondary: "bg-white border border-gray-200",
};

interface ButtonProps {
  shape?: keyof typeof BUTTON_SHAPE_VARIANTS;
  variant?: keyof typeof BUTTON_STATE_VARIANTS;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  shape = "default",
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        COMMON_BUTTON_STYLES.base,
        BUTTON_SHAPE_VARIANTS[shape],
        BUTTON_STATE_VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
