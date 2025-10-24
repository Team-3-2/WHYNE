import { getAromaIconName } from "@/lib/utils";
import { aromaMap } from "@/components/flavor/aroma-map";
import type { Review } from "@/types/wine";
import { Icon } from "@/components";

const ReviewItemAroma = ({ review }: { review: Review }) => {
  return (
    <>
      {Boolean(review.aroma?.length) && (
        <nav aria-label="와인 향">
          <ul className="flex flex-wrap items-center gap-1">
            {review.aroma.map((aroma, index) => {
              const aromaInfo = aromaMap[aroma];
              if (!aromaInfo) return null;

              return (
                <li key={aroma} className="flex items-center gap-3 px-1">
                  <Icon
                    icon={getAromaIconName(aroma) as any}
                    size="sm"
                    className="text-gray-700"
                    aria-hidden="true"
                  />
                  <span className="text-body-sm text-gray-500">
                    {aromaInfo.label}
                  </span>
                  {index < review.aroma.length - 1 && (
                    <span className="text-gray-300" aria-hidden="true">
                      •
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default ReviewItemAroma;
