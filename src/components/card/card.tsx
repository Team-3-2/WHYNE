"use client";
import { useRef } from "react";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import StarRating from "../star-rating/star-rating";
import IconButton from "../button/icon-button";
import DropdownMenu from "../dropdown-menu/dropdown-menu";

/**
 * 카드 컴포넌트
 * @param image : 카드 이미지
 * @param avgRating : 평균 평점
 * @param reviewCount : 리뷰 수
 * @param name : 와인 이름
 * @param region : 와인 지역
 * @param price : 가격
 * @param recentReview : 최신 리뷰
 */

interface CardProps {
  image: string;
  avgRating?: number;
  reviewCount?: number;
  name: string;
  region?: string;
  price?: number;
  recentReview?: RecentReview | null;
}

interface RecentReview {
  content?: string;
}

const Card = ({
  image,
  avgRating,
  reviewCount,
  name,
  region,
  price,
  recentReview,
}: CardProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);
  useClickOutside(menuRef, () => closeMenu());

  return (
    <div className="relative w-full">
      <div className="flex-center aspect-[1/1] w-full overflow-hidden bg-gray-200 p-[12%]">
        <img
          src={image}
          alt={`${name} 와인 이미지`}
          className="h-full"
          loading="lazy"
        />
      </div>
      <div className="relative mt-[24px]">
        <div className="pb-[24px] pr-[26px]">
          {typeof avgRating === "number" && (
            <div className="mb-[12px] flex items-center gap-[14px]">
              <StarRating rating={avgRating} />
              <span className="relative top-[1px] text-body-sm font-normal text-gray-500">
                {reviewCount}개의 후기
              </span>
            </div>
          )}
          <div className="max-w-[280px]">
            <div className="line-clamp-2 text-heading-lg">{name}</div>
            <div className="mt-[6px] text-body-sm font-normal text-gray-500">
              {region}
            </div>
          </div>
          {typeof price === "number" && (
            <div className="mt-[20px] text-heading-lg font-bold pc:mt-[24px]">
              {price !== undefined && price !== null
                ? price.toLocaleString() + "원"
                : "가격 정보 없음"}
            </div>
          )}
        </div>
        {recentReview && (
          <div className="border-t border-gray-300 py-[12px]">
            <div className="text-body-md font-semibold text-gray-900">
              최신 후기
            </div>
            <div className="mt-[8px] line-clamp-2 text-body-sm font-normal text-gray-500">
              {recentReview.content}
            </div>
          </div>
        )}
        <div className="absolute right-0 top-0 z-10" ref={menuRef}>
          <IconButton
            icon="HamburgerIcon"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={toggleMenu}
            className="active:text-color-transparent h-[26px] w-[26px] border-0 text-[#9FACBD] active:bg-gray-100 tablet:h-[26px] tablet:w-[26px] pc:h-[26px] pc:w-[26px]"
          />
          {isMenuOpen && (
            <DropdownMenu
              items={[
                {
                  label: "수정하기",
                  onClick: () => {
                    closeMenu();
                    console.log("수정 모달창 열기");
                  },
                },
                {
                  label: "삭제하기",
                  onClick: () => {
                    closeMenu();
                    console.log("삭제하기");
                  },
                },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
