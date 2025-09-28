import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProfileSidebar = () => {
  return (
    <section
      className={cn(
        "mb-[60px] flex w-[300px] flex-col items-center justify-start gap-5",
        "tablet:mb-[34px] tablet:w-[400px]",
        "pc:sticky pc:top-32 pc:mb-0 pc:h-[calc(100vh-50px-128px)] pc:w-[291px] pc:gap-6 pc:border-r-[1px] pc:px-[25px] pc:pt-10"
      )}
    >
      <div className="flex-col-center gap-3 tablet:gap-4 pc:gap-5">
        {/* TODO(지권): 프로필 이미지 변경 기능 추가 */}
        <Image
          src="/images/aroma/aroma-no-image.jpg"
          alt="profile"
          width={164}
          height={164}
          className="h-[80px] w-[80px] cursor-pointer rounded-full tablet:h-[100px] tablet:w-[100px] pc:h-[164px] pc:w-[164px]"
        />
        <h1 className="font-bold tracking-[-0.02em] pc:text-heading-lg">
          주말에 와인
        </h1>
      </div>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center gap-3",
          "tablet:gap-2",
          "pc:flex-col-center pc:gap-2"
        )}
      >
        {/* TODO(지권): 공용 컴포넌트 변경 */}
        <label className="w-full text-left text-body-sm" htmlFor="nickname">
          닉네임
        </label>
        <div
          className={cn(
            "flex w-full items-center gap-3",
            "tablet:gap-4",
            "pc:flex-col pc:items-stretch pc:gap-5"
          )}
        >
          <input
            type="text"
            placeholder="주말에 와인"
            id="nickname"
            className={cn(
              "rounded-1 w-2/3 flex-1 border border-gray-300 px-4 py-3",
              "tablet:flex-1 pc:w-full"
            )}
          />
          <button
            className={cn(
              "h-[42px] w-1/3 rounded-[4px] bg-black text-body-sm tracking-[-0.03em] text-white",
              "tablet:w-1/4 pc:mx-auto pc:w-[98px]"
            )}
          >
            변경하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSidebar;
