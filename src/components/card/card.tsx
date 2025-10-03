"use client";
import { useRef } from "react";
import Link from "next/link";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import CardImage from "./card-img";
import CardInfo from "./card-info";
import CardReview from "./card-review";
import CardActionMenu from "./card-action-menu";

/**
 * 카드 컴포넌트
 * @param image : 이미지 경로
 * @param blurDataURL : 블러 처리된 이미지 경로 (로딩 시 사용)
 * @param avgRating : 평균 별점
 * @param reviewCount : 후기 개수
 * @param name : 이름
 * @param region : 지역
 * @param price : 가격
 * @param recentReview : 최신 후기 객체 (content 속성 포함)
 * @param href : 카드 클릭 시 이동할 링크 (없으면 클릭 불가)
 * @param actionMenu : 액션 메뉴 표시 여부 (기본값: false)
 */

interface CardProps {
  image: string;
  blurDataURL?: string;
  avgRating?: number;
  reviewCount?: number;
  name: string;
  region?: string;
  price?: number;
  recentReview?: { content?: string } | null;
  href?: string;
  actionMenu?: boolean;
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
  actionMenu = false,
}: CardProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);
  useClickOutside(menuRef, closeMenu);

  const content = (
    <div className="relative w-full">
      <CardImage
        src={image}
        alt={`${name} 와인 이미지`}
        blurDataURL={blurDataURL}
      />
      <div className="relative mt-[24px]">
        <CardInfo
          name={name}
          region={region}
          price={price}
          avgRating={avgRating}
          reviewCount={reviewCount}
        />
        {recentReview?.content && <CardReview content={recentReview.content} />}
        {actionMenu && (
          <div className="absolute right-0 top-0 z-10" ref={menuRef}>
            <CardActionMenu
              isOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
            />
          </div>
        )}
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default Card;
