import { getAromaIconName } from "@/lib/utils";
import { aromaMap } from "../flavor/aroma-map";
import Icon from "../icon/icon";
import { AromaKey } from "@/types/aroma-type";

interface FlavorIconListProps {
  aroma: AromaKey[];
  size?: "sm" | "md";
}

const FlavorIconList = ({ aroma, size = "sm" }: FlavorIconListProps) => {
  const firstAroma = aroma[0];
  const aromaInfo = firstAroma ? aromaMap[firstAroma] : null;
  if (!aromaInfo) return null;

  const aromaInfoList = aroma.map((a) => aromaMap[a]).filter(Boolean);
  if (aromaInfoList.length === 0) return null;

  return (
    <nav aria-label="와인 향">
      <ul className="flex flex-wrap items-center gap-1">
        {aroma.map((aroma, index) => {
          const aromaInfo = aromaMap[aroma];
          if (!aromaInfo) return null;

          return (
            <li key={aroma} className="flex items-center">
              <div className="flex items-center gap-3 px-1">
                <Icon
                  icon={getAromaIconName(aroma) as any}
                  size="sm"
                  className="text-gray-700"
                  aria-hidden="true"
                />
                <span className="text-body-sm text-gray-500">
                  {aromaInfo.label}
                </span>
              </div>
              {index < aroma.length - 1 && (
                <span className="text-gray-300" aria-hidden="true">
                  •
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FlavorIconList;
