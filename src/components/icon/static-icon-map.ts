/**
 * STATIC_ICON_MAP : 정적 아이콘 맵
 * 정적으로 import되는 아이콘(빠른 반응이 필요한 아이콘)은 STATIC_ICON_MAP에 추가합니다.
 */

import ArrowUpIcon from "/public/icons/ic-arrow-up.svg";
import ArrowDownIcon from "/public/icons/ic-arrow-down.svg";
import LikeOnIcon from "/public/icons/ic-like-on.svg";
import LikeOffIcon from "/public/icons/ic-like-off.svg";

const STATIC_ICON_MAP = {
  ArrowUpIcon,
  ArrowDownIcon,
  LikeOnIcon,
  LikeOffIcon,
};

export type StaticIconName = keyof typeof STATIC_ICON_MAP;
export default STATIC_ICON_MAP;
