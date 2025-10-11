/**
 * STATIC_ICON_MAP : 정적 아이콘 맵
 * 정적으로 import되는 아이콘(빠른 반응이 필요한 아이콘)은 STATIC_ICON_MAP에 추가합니다.
 */

import ArrowUpIcon from "/public/icons/ic-arrow-up.svg";
import ArrowDownIcon from "/public/icons/ic-arrow-down.svg";
import LikeOnIcon from "/public/icons/ic-like-on.svg";
import LikeOffIcon from "/public/icons/ic-like-off.svg";
import StarIcon from "/public/icons/ic-star.svg";
import AlertIcon from "/public/icons/ic-alert.svg";
import ArrowLeftIcon from "/public/icons/ic-arrow-left.svg";
import ArrowRightIcon from "/public/icons/ic-arrow-right.svg";
import CameraIcon from "/public/icons/ic-camera.svg";
import FilterIcon from "/public/icons/ic-filter.svg";
import HamburgerIcon from "/public/icons/ic-hamburger.svg";
import ProfileIcon from "/public/icons/ic-profile.svg";
import SearchIcon from "/public/icons/ic-search.svg";
import GoogleIcon from "/public/icons/ic-sns-google.svg";
import KakaoIcon from "/public/icons/ic-sns-kakao.svg";
import WineIcon from "/public/icons/ic-wine.svg";
import XIcon from "/public/icons/ic-x.svg";
import EmptyStateIcon from "/public/icons/ic-empty-state.svg";

const STATIC_ICON_MAP = {
  ArrowUpIcon,
  ArrowDownIcon,
  LikeOnIcon,
  LikeOffIcon,
  StarIcon,
  AlertIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CameraIcon,
  FilterIcon,
  HamburgerIcon,
  ProfileIcon,
  SearchIcon,
  GoogleIcon,
  KakaoIcon,
  WineIcon,
  XIcon,
  EmptyStateIcon,
};

export type StaticIconName = keyof typeof STATIC_ICON_MAP;
export default STATIC_ICON_MAP;
