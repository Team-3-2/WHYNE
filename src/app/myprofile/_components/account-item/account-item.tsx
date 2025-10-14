"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button, ConfirmModal, Profile } from "@/components";
import { User } from "@/types/user-type";
import usePostImage from "@/hooks/api/use-post-image";
import usePatchProfile from "@/hooks/api/my-profile/use-patch-profile";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface AccountItemProps {
  user: User | undefined;
}

const AccountItem = ({ user }: AccountItemProps) => {
  const router = useRouter();
  const [image, setImage] = useState<string | undefined>(user?.image);
  const [nickname, setNickname] = useState<string | undefined>(user?.nickname);
  const [confirmModal, setConfirmModal] = useState(false);
  const { profileUpdateError, uploadImageError } = useToast();

  const { mutateAsync: uploadImage } = usePostImage();
  const { mutateAsync: updateProfile } = usePatchProfile();

  useEffect(() => {
    if (!image) return;
  }, [image]);

  // 이미지 변경
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!/^image\//.test(file.type)) {
      uploadImageError("이미지 파일만 업로드 가능합니다.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      uploadImageError("5MB 이하 이미지만 업로드 가능합니다.");
      return;
    }

    try {
      const { url } = await uploadImage({ url: file });
      await updateProfile({ imageUrl: url });
      setImage(`${url}?v=${Date.now()}`);
      router.refresh();
    } catch (err) {
      profileUpdateError("프로필 갱신 실패");
      setImage(user?.image);
    }
  };

  // 닉네임 변경
  const handleNicknameUpdate = async () => {
    const trimmed = nickname?.trim();
    if (!trimmed) return;

    try {
      await updateProfile({ nickname: trimmed });
      setNickname("");
      router.refresh();
    } catch (err) {
      profileUpdateError("닉네임 변경 실패");
    } finally {
      setConfirmModal(false);
    }
  };

  return (
    <section
      className={cn(
        "mx-auto mb-[60px] mt-[200px] flex w-[300px] flex-col items-center justify-start gap-5",
        "tablet:mb-[34px] tablet:w-[400px]",
        "pc:sticky pc:top-32 pc:mb-0 pc:mt-0 pc:h-[calc(100vh-50px-128px)] pc:w-[291px] pc:justify-center pc:gap-6 pc:px-[25px] pc:pt-10"
      )}
    >
      <div className="flex-col-center gap-3 tablet:gap-4 pc:gap-5">
        <Profile url={user?.image || image} handleChange={handleChange} />
        <h1 className="font-bold tracking-[-0.02em] pc:text-heading-lg">
          {user?.nickname || "닉네임 로딩중..."}
        </h1>
      </div>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center gap-3",
          "tablet:gap-2",
          "pc:flex-col-center pc:gap-2"
        )}
      >
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
            value={nickname || ""}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            autoFocus
            maxLength={10}
            className={cn(
              "w-2/3 flex-1 rounded-[4px] border border-gray-300 px-4 py-3 focus:outline-none",
              "tablet:flex-1 pc:w-full"
            )}
          />
          <Button
            onClick={() => setConfirmModal(true)}
            className={cn(
              "h-[42px] w-1/3 rounded-[4px] bg-black text-body-sm tracking-[-0.03em] text-white",
              "tablet:w-1/4 pc:mx-auto pc:w-[98px]"
            )}
            label="변경하기"
          />
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        onConfirm={handleNicknameUpdate}
        msg={{
          text: (
            <>
              &apos;{nickname}&apos;으로 <br /> 닉네임을 변경할까요?
            </>
          ),
          cancelMsg: "취소",
          confirmMsg: "변경하기",
        }}
      />
    </section>
  );
};

export default AccountItem;
