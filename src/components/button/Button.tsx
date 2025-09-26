import { cn } from "@/lib/utils";

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
