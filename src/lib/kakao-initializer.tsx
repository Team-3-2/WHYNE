"use client";

import Script from "next/script";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KaKaoInitializer = () => {
  const handleLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.8/kakao.min.js"
      integrity="sha384-WUSirVbD0ASvo37f3qQZuDap8wy76aJjmGyXKOYgPL/NdAs8HhgmPlk9dz2XQsNv"
      crossOrigin="anonymous"
      onLoad={handleLoad}
    ></Script>
  );
};

export default KaKaoInitializer;
