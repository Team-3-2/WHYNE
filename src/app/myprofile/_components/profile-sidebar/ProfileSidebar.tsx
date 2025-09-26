import React from "react";
import Image from "next/image";

const ProfileSidebar = () => {
  return (
    <section className="sticky top-0 flex h-[calc(100vh-50px-128px)] w-[291px] flex-col items-center justify-start gap-6 border-r-[1px]">
      <div className="flex-col-center gap-5">
        {/* TODO(지권): 프로필 이미지 변경 기능 추가 */}
        <Image
          src="/images/aroma/aroma-no-image.jpg"
          alt="profile"
          width={164}
          height={164}
          className="cursor-pointer rounded-full"
        />
        <h1 className="text-heading-lg font-bold">주말에 와인</h1>
      </div>
      <div className="flex-col-center gap-2">
        {/* TODO(지권): 공용 컴포넌트 변경 */}
        <label className="w-full text-left text-body-sm" htmlFor="nickname">
          닉네임
        </label>
        <input
          type="text"
          placeholder="주말에 와인"
          id="nickname"
          className="rounded-1 border border-[#D1D1D1] px-4 py-3"
        />
        <button className="mt-3 h-[42px] w-[98px] rounded-[4px] bg-black text-body-sm tracking-[-0.03em] text-white">
          변경하기
        </button>
      </div>
    </section>
  );
};

export default ProfileSidebar;
