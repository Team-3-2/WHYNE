import Icon from "@/components/icon/icon";
import { COLOR_STYLES } from "./style";
import type { UnifiedIconName } from "@/components/icon/icon";

interface FillShapeProps {
  icon: UnifiedIconName;
  fill: number;
  size?: "xs" | "sm" | "md" | "md2" | "lg" | "xl" | "2xl";
}

const FillShape = ({ icon, fill, size = "sm" }: FillShapeProps) => {
  const widthPercent = Math.min(Math.max(fill, 0), 100).toFixed(1);

  return (
    <div className="flex-center relative">
      <Icon
        icon={icon}
        size={size}
        className={`mobile:ic-sm ${COLOR_STYLES.inactive}`}
      />
      <div
        className={`absolute left-0 top-0 h-full overflow-hidden`}
        style={{ width: `${widthPercent}%` }}
      >
        <Icon
          icon={icon}
          size={size}
          className={`align-top mobile:ic-sm ${COLOR_STYLES.active}`}
        />
      </div>
    </div>
  );
};

export default FillShape;
