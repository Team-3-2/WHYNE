import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./site";

/**
 * 사이트 공통 메타데이터
 * @author yeonsu
 */
export const METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    locale: "ko_KR",
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} 서비스의 대표 이미지입니다.`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpg`,
        alt: `${SITE_URL} 서비스 트위터 공유용 이미지`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * 페이지마다 다른 title과 description을 설정하기 위한 메타데이터 생성 함수
 * 공통 메타데이터를 기반으로 페이지별 정보를 덮어씌웁니다.
 * @author yeonsu
 * @param title : 해당 페이지 제목
 * @param description : 해당 페이지 설명
 */
export const createPageInfoMetadata = (
  title: string,
  description: string
): Metadata => {
  return {
    ...METADATA,
    title,
    description,
    openGraph: {
      ...METADATA.openGraph,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      ...METADATA.twitter,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
};
