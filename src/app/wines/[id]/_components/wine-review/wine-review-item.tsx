"use client";

import { useState, useRef, useMemo, memo } from "react";
import { useRouter } from "next/navigation";
import { cn, getAromaIconName } from "@/lib/utils";
import WineTaste, { buildTasteData } from "@/components/wine-taste";
import {
  Rating,
  Icon,
  DropdownMenu,
  IconButton,
  LikeButton,
  ConfirmModal,
} from "@/components";
import { aromaMap } from "@/components/flavor/aroma-map";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import WineReviewRating from "./wine-review-rating";
import useReviewLike from "../../../../../hooks/api/reviews/use-review-like";
import useReviewDelete from "../../../../../hooks/api/reviews/use-review-delete";
import type { Review } from "@/types/wine";
import { useToast } from "@/hooks/use-toast";

interface WineReviewItemProps {
  review: Review;
  isFirst?: boolean;
  currentUserId?: number;
  wineId: number;
}

interface OptionMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const OptionMenu = memo(function OptionMenu({
  isOpen,
  onToggle,
  onEdit,
  onDelete,
  onClose,
}: OptionMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onClose);

  return (
    <div className="relative" ref={menuRef}>
      <IconButton
        icon="HamburgerIcon"
        aria-label="옵션 메뉴"
        className="!h-6 !w-6 border-none hover:bg-inherit active:bg-inherit"
        iconClassName="mobile:ic-sm tablet:ic-sm pc:ic-md"
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

const WineReviewItem = ({
  review,
  isFirst = false,
  currentUserId,
  wineId,
}: WineReviewItemProps) => {
  const router = useRouter();
  const { reviewDeleteSuccess, reviewDeleteError } = useToast();

  const derivedIsLiked = useMemo(() => {
    if (typeof review.isLiked === "boolean") {
      return review.isLiked;
    }
    if (!review.isLiked) {
      return false;
    }
    return Object.keys(review.isLiked).length > 0;
  }, [review.isLiked]);

  const [isTasteOpen, setIsTasteOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [liked, setLiked] = useState(derivedIsLiked);

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

  const tastes = useMemo(() => {
    return buildTasteData({
      lightBold: review.lightBold,
      smoothTannic: review.smoothTannic,
      drySweet: review.drySweet,
      softAcidic: review.softAcidic,
    });
  }, [
    review.lightBold,
    review.smoothTannic,
    review.drySweet,
    review.softAcidic,
  ]);

  const handleEdit = () => {
    closeMenu();
    router.push(`/reviews/${review.id}/edit`);
  };

  const openDeleteModal = () => {
    closeMenu();
    setIsDeleteModalOpen(true);
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
      <article
        className={cn(
          "flex w-full select-none flex-col items-center gap-[14px] py-8",
          "tablet:items-center tablet:gap-[20px] tablet:py-10",
          "pc:gap-[20px] pc:py-8",
          !isFirst && "border-t border-gray-300"
        )}
        aria-label={`${review.user.nickname}님의 리뷰`}
      >
        <div
          className={cn(
            "flex w-full flex-col gap-[14px]",
            "tablet:gap-[20px]",
            "pc:gap-[20px]"
          )}
        >
          <div className="flex items-center justify-between">
            <div role="group" aria-label={`별점 ${review.rating}점`}>
              <Rating rating={review.rating} size="sm" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <WineReviewRating createdAt={review.createdAt} user={review.user} />
            <div className="flex items-center gap-2">
              {!isMyReview && (
                <LikeButton
                  isLike={liked}
                  disabled={likePending}
                  onClick={handleLikeClick}
                  aria-label={liked ? "좋아요 취소" : "좋아요"}
                />
              )}
              {isMyReview && (
                <OptionMenu
                  isOpen={isMenuOpen}
                  onToggle={toggleMenu}
                  onEdit={handleEdit}
                  onDelete={openDeleteModal}
                  onClose={closeMenu}
                />
              )}
            </div>
          </div>

          {review.aroma && review.aroma.length > 0 && (
            <nav aria-label="와인 향">
              <ul className="flex flex-wrap items-center gap-1">
                {review.aroma.map((aroma, index) => {
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

          <p className="whitespace-pre-wrap break-keep text-body-md leading-relaxed tracking-[-0.02em] text-gray-900">
            {review.content}
          </p>
          <div>
            <div
              id={`taste-${review.id}`}
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isTasteOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
              role="region"
              aria-label="맛 평가"
              aria-hidden={!isTasteOpen}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "my-[18px]",
                    "tablet:my-[20px]",
                    "pc:my-[28px]"
                  )}
                >
                  <WineTaste type="review" tastes={tastes} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <IconButton
              icon="ArrowDownIcon"
              aria-label={isTasteOpen ? "맛 평가 숨기기" : "맛 평가 보기"}
              aria-expanded={isTasteOpen}
              aria-controls={`taste-${review.id}`}
              onClick={() => setIsTasteOpen(!isTasteOpen)}
              className={cn(
                "!h-[32px] !w-full",
                "!border-none !bg-transparent hover:!bg-transparent active:!bg-transparent",
                "text-gray-600 transition-transform duration-300 ease-in-out",
                isTasteOpen && "rotate-180"
              )}
            />
          </div>
        </div>
      </article>

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

export default WineReviewItem;
