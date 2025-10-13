"use client";

import { useState, useRef } from "react";
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

const OptionMenu = ({
  isOpen,
  onToggle,
  onEdit,
  onDelete,
  onClose,
}: OptionMenuProps) => {
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
};

const WineReviewItem = ({
  review,
  isFirst = false,
  currentUserId,
  wineId,
}: WineReviewItemProps) => {
  const router = useRouter();
  const { reviewDeleteSuccess, reviewDeleteError } = useToast();

  const isLiked =
    typeof review.isLiked === "boolean"
      ? review.isLiked
      : Object.keys(review.isLiked).length > 0;

  const [isTasteOpen, setIsTasteOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);

  const isMyReview = currentUserId === review.user.id;

  const { mutate: toggleLike, isPending: likePending } = useReviewLike(
    review.id,
    wineId,
    isLiked
  );

  const { mutate: deleteReview, isPending: deletePending } = useReviewDelete({
    reviewId: review.id,
    wineId,
  });

  const tastes = buildTasteData({
    lightBold: review.lightBold,
    smoothTannic: review.smoothTannic,
    drySweet: review.drySweet,
    softAcidic: review.softAcidic,
  });

  const handleEdit = () => {
    closeMenu();
    router.push(`/reviews/${review.id}/edit`);
  };

  const openDeleteModal = () => {
    closeMenu();
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
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

  return (
    <>
      <article
        className={cn(
          "flex w-full flex-col items-center gap-6 px-4 py-8",
          "tablet:items-start tablet:gap-8 tablet:px-6 tablet:py-10",
          "pc:gap-6 pc:px-4 pc:py-8",
          !isFirst && "border-t border-gray-300"
        )}
        aria-label={`${review.user.nickname}님의 리뷰`}
      >
        <div
          className={cn(
            "flex w-full max-w-[420px] flex-col gap-6",
            "tablet:max-w-none tablet:gap-8",
            "pc:max-w-[720px] pc:gap-6"
          )}
        >
          {/* 1. 별점 */}
          <div className="flex items-center justify-between">
            <div role="group" aria-label={`별점 ${review.rating}점`}>
              <Rating rating={review.rating} size="sm" />
            </div>
          </div>

          {/* 2. 프로필 + 시간 + 좋아요 or 햄버거 버튼*/}
          <header className="flex items-center justify-between">
            <WineReviewRating createdAt={review.createdAt} user={review.user} />
            <div className="flex items-center gap-2">
              {!isMyReview && (
                <LikeButton
                  isLike={isLiked}
                  disabled={likePending}
                  onClick={() => {
                    toggleLike();
                  }}
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
          </header>

          {/* 3. 향 정보 */}
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

          {/* 4. 리뷰 내용 */}
          <p className="text-body-md leading-relaxed tracking-[-0.02em] text-gray-900">
            {review.content}
          </p>

          {/* 5. 맛 평가 토글 영역 */}
          <div className="flex flex-col gap-4">
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
                <div className="pb-2">
                  <WineTaste type="review" tastes={tastes} />
                </div>
              </div>
            </div>
          </div>

          {/* 6. 토글 */}
          <footer className="flex w-full justify-center">
            <IconButton
              icon="ArrowUpIcon"
              aria-label={isTasteOpen ? "맛 평가 숨기기" : "맛 평가 보기"}
              aria-expanded={isTasteOpen}
              aria-controls={`taste-${review.id}`}
              onClick={() => setIsTasteOpen(!isTasteOpen)}
              className={cn(
                "h-auto w-auto p-2",
                "!border-none !bg-transparent hover:!bg-transparent active:!bg-transparent",
                "text-gray-600 transition-transform duration-300 ease-in-out",
                isTasteOpen && "rotate-180"
              )}
            />
          </footer>
        </div>
      </article>

      {/* <ConfirmModal
        isOpen={isDeleteModalOpen}
        msg={{
          text: "정말 삭제하시겠습니까?",
          cancelMsg: "취소",
          confirmMsg: "삭제하기",
        }}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      /> */}
    </>
  );
};

export default WineReviewItem;
