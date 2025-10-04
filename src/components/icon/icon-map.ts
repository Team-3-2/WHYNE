/**
 * ICON_MAP : 기본 아이콘 맵
 * 기본 아이콘은 React.lazy로 동적으로 import됩니다.
 */

const ICON_MAP = {
  // flavor
  AppleIcon: () => import("/public/icons/flavor/ic-apple.svg"),
  BakingIcon: () => import("/public/icons/flavor/ic-baking.svg"),
  BerryIcon: () => import("/public/icons/flavor/ic-berry.svg"),
  CaramelIcon: () => import("/public/icons/flavor/ic-caramel.svg"),
  CherryIcon: () => import("/public/icons/flavor/ic-cherry.svg"),
  ChocolateIcon: () => import("/public/icons/flavor/ic-chocolate.svg"),
  CitrusIcon: () => import("/public/icons/flavor/ic-citrus.svg"),
  EarthIcon: () => import("/public/icons/flavor/ic-earth.svg"),
  FlowerIcon: () => import("/public/icons/flavor/ic-flower.svg"),
  GrassIcon: () => import("/public/icons/flavor/ic-grass.svg"),
  LeatherIcon: () => import("/public/icons/flavor/ic-leather.svg"),
  MineralIcon: () => import("/public/icons/flavor/ic-mineral.svg"),
  OakIcon: () => import("/public/icons/flavor/ic-oak.svg"),
  PeachIcon: () => import("/public/icons/flavor/ic-peach.svg"),
  PepperIcon: () => import("/public/icons/flavor/ic-pepper.svg"),
  SpiceIcon: () => import("/public/icons/flavor/ic-spice.svg"),
  TobaccoIcon: () => import("/public/icons/flavor/ic-tobacco.svg"),
  TropicalIcon: () => import("/public/icons/flavor/ic-tropical.svg"),
  VanillaIcon: () => import("/public/icons/flavor/ic-vanilla.svg"),
};

export type IconName = keyof typeof ICON_MAP;
export default ICON_MAP;
