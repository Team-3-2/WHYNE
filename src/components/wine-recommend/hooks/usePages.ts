"use client";
import { useEffect, useState } from "react";

const usePages = () => {
  const [pages, setPages] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const SizeCheck = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("sizecheck", SizeCheck);
    return () => window.removeEventListener("sizecheck", SizeCheck);
  }, []);

  useEffect(() => {
    if (width >= 1280) {
      setPages(4);
    } else if (width >= 744) {
      setPages(3);
    } else {
      setPages(8);
      {
        /*여기선 8이지만 나중에 혹시 불러오는 recommend 개수가 달라지시면 prop으로 받으셔서 여기도 바꾸셔야 합니다. */
      }
    }
  }, [width]);
  return pages;
};

export default usePages;
