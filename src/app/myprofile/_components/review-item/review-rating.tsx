import { DropdownMenu, Icon, StarRating } from "@/components";
import { Dispatch, SetStateAction } from "react";

interface ReviewRatingProps {
  setOptionMenu: Dispatch<SetStateAction<boolean>>;
  optionMenu: boolean;
}

const ReviewRating = ({ setOptionMenu, optionMenu }: ReviewRatingProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <StarRating rating={5} size="md" maxRating={5} />
          <span className="text-body-lg font-bold tracking-[-0.02em] text-gray-900">
            5
          </span>
        </span>
        <span className="text-body-md tracking-[-0.02em] text-gray-500">
          10시간 전
        </span>
      </div>
      <div className="relative inline-flex">
        <button
          aria-label="옵션 메뉴"
          onClick={() => setOptionMenu((v) => !v)}
          className="p-1"
        >
          <Icon icon="HamburgerIcon" size="md" />
        </button>

        {optionMenu && (
          <div
            id="post-option-menu"
            role="menu"
            className="absolute right-0 top-full z-50 mt-2"
          >
            <DropdownMenu
              items={[
                { label: "수정하기", onClick: () => {} },
                { label: "삭제하기", onClick: () => {} },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewRating;
