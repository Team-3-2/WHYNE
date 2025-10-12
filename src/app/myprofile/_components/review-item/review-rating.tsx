import { DropdownMenu, Icon, Rating } from "@/components";
import useDeleteUserReview from "@/hooks/api/reviews/use-delete-user-review";
import { getTimeAgo } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface ReviewRatingProps {
  setOptionMenu: Dispatch<SetStateAction<boolean>>;
  optionMenu: boolean;
  createdAt: string;
  rating: number;
  id: number;
}

const ReviewRating = ({
  setOptionMenu,
  optionMenu,
  createdAt,
  rating,
  id,
}: ReviewRatingProps) => {
  const { mutate } = useDeleteUserReview();

  const handleReviewDelete = () => {
    mutate({ id });
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Rating rating={rating} size="sm" showRating />
        </span>
        <span className="text-body-md tracking-[-0.02em] text-gray-500">
          {getTimeAgo(createdAt)}
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
                { label: "수정하기", href: `/reviews/${id}/edit` },
                { label: "삭제하기", onClick: handleReviewDelete },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewRating;
