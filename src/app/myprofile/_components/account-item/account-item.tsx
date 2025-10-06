import React, { ChangeEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { Profile } from "@/components";
import { User } from "@/types/user-type";
import usePostProfileImage from "@/hooks/api/use-post-profile-image";

interface AccountItemProps {
  user: User | undefined;
}

const AccountItem = ({ user }: AccountItemProps) => {
  console.log("$ user", user);
  const [image, setImage] = useState<string | undefined>(user?.image);
  console.log("$ image", image);

  const { mutate: postProfileImage } = usePostProfileImage();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const tempUrl = URL.createObjectURL(file);
      setImage(tempUrl);

      await postProfileImage({ image: tempUrl });
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      setImage(user?.image);
    }
  };

  return (
    <section
      className={cn(
        "mx-auto mb-[60px] flex w-[300px] flex-col items-center justify-start gap-5",
        "tablet:mb-[34px] tablet:w-[400px]",
        "pc:sticky pc:top-32 pc:mb-0 pc:h-[calc(100vh-50px-128px)] pc:w-[291px] pc:justify-center pc:gap-6 pc:px-[25px] pc:pt-10"
      )}
    >
      <div className="flex-col-center gap-3 tablet:gap-4 pc:gap-5">
        <Profile url={user?.image} handleChange={handleChange} />
        <h1 className="font-bold tracking-[-0.02em] pc:text-heading-lg">
          {user?.nickname}
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
            placeholder="닉네임을 입력해 주세요."
            id="nickname"
            onChange={(e) => {
              postProfileImage({ nickname: e.target.value });
            }}
            className={cn(
              "w-2/3 flex-1 rounded-[4px] border border-gray-300 px-4 py-3",
              "tablet:flex-1 pc:w-full"
            )}
          />
          <button
            onClick={() => {
              postProfileImage({ nickname: user?.nickname });
            }}
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

export default AccountItem;
