"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  COMMON_BUTTON_STYLES,
  BUTTON_SHAPE_VARIANTS,
  BUTTON_STATE_VARIANTS,
  BUTTON_TEXT_COLOR_VARIANTS,
} from "@/components/button/style";

const TITLE = "404";

const TITLE_STYLES = {
  fontSize: "pc:text-[140px] tablet:text-[130px] text-[90px]",
  fontWeight: "font-medium",
  baseColor: "text-gray-100",
  stroke: "[-webkit-text-stroke-width:.6px] [-webkit-text-stroke-color:#aaa]",
};

const NotFound = () => {
  return (
    <div className="flex-center cover h-screen w-screen bg-gray-100 bg-[url('/images/common/bg-main.png')] bg-no-repeat pt-[40px]">
      <div className="container text-center">
        <h2 className="relative m-auto inline-block leading-none">
          <span
            className={cn(
              TITLE_STYLES.fontSize,
              TITLE_STYLES.fontWeight,
              TITLE_STYLES.baseColor,
              TITLE_STYLES.stroke
            )}
          >
            {TITLE}
          </span>
          <span
            className={cn(
              "absolute left-0 top-0 animate-wave-mask",
              TITLE_STYLES.fontSize,
              TITLE_STYLES.fontWeight
            )}
          >
            {TITLE}
          </span>
        </h2>

        <p className="mt-4 text-heading-md text-default tablet:text-heading-lg pc:text-heading-lg">
          찾을 수 없는 페이지입니다
        </p>
        <p
          className={cn(
            "mt-[8px] !font-normal text-gray-400 mobile:text-body-sm",
            "tablet:mt-[10px] tablet:text-body-lg",
            "pc:mt-[10px] pc:text-body-lg"
          )}
        >
          요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요
        </p>
        <Link
          href={"/"}
          className={cn(
            COMMON_BUTTON_STYLES,
            BUTTON_SHAPE_VARIANTS.default,
            BUTTON_STATE_VARIANTS.default,
            BUTTON_TEXT_COLOR_VARIANTS.default,
            "m-[25px_auto_0] w-auto max-w-[210px] tablet:m-[40px_auto_0] pc:m-[40px_auto_0]"
          )}
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
