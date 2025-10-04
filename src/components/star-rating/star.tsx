import Icon from "@/components/icon/icon";

interface RatingStarProps {
  fill: number;
  size?: "xs" | "sm" | "md" | "md2" | "lg" | "xl" | "2xl";
}

const Star = ({ fill, size = "sm" }: RatingStarProps) => {
  const widthPercent = Math.min(Math.max(fill, 0), 100);

  return (
    <div className="flex-center relative">
      <Icon
        icon="StarIcon"
        size={size}
        color="gray300"
        className="mobile:ic-sm"
      />
      <div
        className={`absolute left-0 top-0 h-full overflow-hidden w-[${widthPercent}%]`}
      >
        <Icon
          icon="StarIcon"
          size={size}
          color="default"
          className="align-top mobile:ic-sm"
        />
      </div>
    </div>
  );
};

export default Star;
