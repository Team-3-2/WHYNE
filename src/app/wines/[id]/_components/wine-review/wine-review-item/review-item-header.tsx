"use client";

import { memo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Rating,
  LikeButton,
  DropdownMenu,
  IconButton,
  ConfirmModal,
} from "@/components";
import { cn } from "@/lib/utils";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import useReviewLike from "@/hooks/api/reviews/use-review-like";
import useReviewDelete from "@/hooks/api/reviews/use-review-delete";
import { useToast } from "@/hooks/use-toast";
import WineReviewRating from "../wine-review-rating";
import ReviewItemAroma from "./review-item-aroma";
import type { Review } from "@/types/wine";

interface ReviewItemHeaderProps {
  review: Review;
  wineId: number;
  currentUserId?: number;
}

const OptionMenu = memo(function OptionMenu({
  isOpen,
  onToggle,
  onClose,
  onEdit,
  onDelete,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onClose);

  return (
    <div className="relative" ref={menuRef}>
      <IconButton
        icon="HamburgerIcon"
        aria-label="옵션 메뉴"
        className="!h-6 !w-6 border-none hover:bg-inherit active:bg-inherit"
        iconClassName="ic-sm pc:ic-md"
        onClick={onToggle}
      />
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2">
          <DropdownMenu
            items={[
              { label: "수정하기", onClick: onEdit },
              { label: "삭제하기", onClick: onDelete },
            ]}
          />
        </div>
      )}
    </div>
  );
});

const ReviewItemHeader = ({
  review,
  wineId,
  currentUserId,
}: ReviewItemHeaderProps) => {
  const router = useRouter();
  const { reviewDeleteSuccess, reviewDeleteError } = useToast();

  const derivedIsLiked =
    typeof review.isLiked === "boolean"
      ? review.isLiked
      : Boolean(review.isLiked && Object.keys(review.isLiked).length);

  const [liked, setLiked] = useState(derivedIsLiked);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);

  const isMyReview = currentUserId === review.user.id;

  const { mutate: toggleLike, isPending: likePending } = useReviewLike(
    review.id,
    wineId
  );
  const { mutate: deleteReview, isPending: deletePending } = useReviewDelete({
    reviewId: review.id,
    wineId,
  });

  const handleEdit = () => {
    closeMenu();
    router.push(`/reviews/${review.id}/edit`);
  };

  const handleDeleteConfirm = () => {
    deleteReview(undefined, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        reviewDeleteSuccess();
      },
      onError: () => {
        reviewDeleteError();
      },
    });
  };

  const handleLikeClick = () => {
    const next = !liked;
    setLiked(next);

    toggleLike(next, {
      onError: () => {
        setLiked((prev) => !prev);
      },
    });
  };

  return (
    <>
      <div
        className={cn("flex w-full flex-col gap-6", "tablet:gap-8", "pc:gap-6")}
      >
        <div role="group" aria-label={`별점 ${review.rating}점`}>
          <Rating rating={review.rating} size="sm" />
        </div>

        <div className="flex items-center justify-between">
          <WineReviewRating createdAt={review.createdAt} user={review.user} />
          <div className="flex items-center">
            {!isMyReview ? (
              <LikeButton
                isLike={liked}
                disabled={likePending}
                onClick={handleLikeClick}
                aria-label={liked ? "좋아요 취소" : "좋아요"}
              />
            ) : (
              <OptionMenu
                isOpen={isMenuOpen}
                onToggle={toggleMenu}
                onClose={closeMenu}
                onEdit={handleEdit}
                onDelete={() => setIsDeleteModalOpen(true)}
              />
            )}
          </div>
        </div>
        <ReviewItemAroma review={review} />
      </div>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        msg={{
          text: "리뷰를 정말 삭제할까요?",
          cancelMsg: "취소",
          confirmMsg: deletePending ? "삭제 중..." : "삭제",
        }}
      />
    </>
  );
};

export default memo(ReviewItemHeader);
