"use client";
import { useRef } from "react";
import Link from "next/link";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import CardImage from "./card-img";
import CardInfo from "./card-info";
import CardReview from "./card-review";
import CardActionMenu from "./card-action-menu";
import type { DropdownItem } from "@/components/dropdown-menu/dropdown-menu";

/**
 * 카드 컴포넌트(카드 구성/레이아웃/페이지 링크 처리 역할)
 * @param image : 이미지 경로
 * @param blurDataURL : 블러 처리된 이미지 경로 (로딩 시 사용)
 * @param avgRating : 평균 별점
 * @param reviewCount : 후기 개수
 * @param name : 이름
 * @param region : 지역
 * @param price : 가격
 * @param recentReview : 최신 후기 객체 (content 속성 포함)
 * @param href : 카드 클릭 시 이동할 링크 (없으면 클릭 불가)
 * @param actionMenuItems : 드롭다운 메뉴 아이템 배열 (없으면 액션 메뉴 미표시)
 */

interface CardProps {
  image: string | null;
  blurDataURL?: string;
  avgRating?: number;
  reviewCount?: number;
  name: string;
  region?: string;
  price?: number;
  recentReview?: { content?: string } | null;
  href?: string;
  actionMenuItems?: DropdownItem[];
}

const Card = ({
  image,
  blurDataURL,
  avgRating,
  reviewCount,
  name,
  region,
  price,
  recentReview,
  href,
  actionMenuItems,
}: CardProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const hasActionMenu =
    Array.isArray(actionMenuItems) && actionMenuItems.length > 0;

  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);
  useClickOutside(menuRef, closeMenu);

  return (
    <div className="group relative w-full">
      {href ? (
        <Link href={href}>
          <CardImage
            src={image}
            alt={`${name} 이미지`}
            blurDataURL={blurDataURL}
          />
        </Link>
      ) : (
        <CardImage
          src={image}
          alt={`${name} 이미지`}
          blurDataURL={blurDataURL}
        />
      )}
      <div className="break-word relative pt-[24px]">
        {href ? (
          <Link href={href}>
            <CardInfo
              name={name}
              region={region}
              price={price}
              avgRating={avgRating}
              reviewCount={reviewCount}
            />
            {recentReview?.content && (
              <CardReview content={recentReview.content} />
            )}
          </Link>
        ) : (
          <>
            <CardInfo
              name={name}
              region={region}
              price={price}
              avgRating={avgRating}
              reviewCount={reviewCount}
            />
            {recentReview?.content && (
              <CardReview content={recentReview.content} />
            )}
          </>
        )}

        {hasActionMenu && (
          <div className="absolute right-0 top-[24px] z-10" ref={menuRef}>
            <CardActionMenu
              isOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
              items={actionMenuItems}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
