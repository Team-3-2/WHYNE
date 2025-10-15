import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./site";

export const METADATA = {
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
        width: 900,
        height: 900,
        alt: `${SITE_NAME} 서비스의 대표 이미지입니다.`,
      },
    ],
  },
  icons: {
    icon: ["/favicon.ico", "/icon-192.png"],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-icon.png"],
    other: [
      {
        rel: "icon",
        url: "/favicon.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/twitter-image.jpg`,
        alt: `${SITE_URL} 서비스 트위터 공유용 이미지`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
