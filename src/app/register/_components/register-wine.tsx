"use client";

import postImage from "@/api/image/post-image";
import { Button, SelectType, TextInput, Icon } from "@/components";
import PageModalBtnWrapper from "@/components/modal/page-modal-btn-wrapper";
import WineImg from "@/components/wine-img/wine-img";
import usePatchWine from "@/hooks/api/wines/use-patch-wine";
import usePostWine from "@/hooks/api/wines/use-post-wine";
import { WineFormData } from "@/types/wine";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { REGISTER_STYLES } from "@/components/wine-img/style";

const RegisterWine = ({
  wineData,
  id,
}: {
  wineData: WineFormData | null;
  id: string | null;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WineFormData>({
    defaultValues: {
      name: wineData?.name,
      region: wineData?.region,
      image: wineData?.image,
      price: wineData?.price,
      type: wineData?.type,
    },
  });
  const [previewImgUrl, setPreviewImgUrl] = useState<string | null>(
    wineData && typeof wineData.image === "string" ? wineData.image : null
  );
  const [imgUrl, setImgUrl] = useState<string>(
    wineData && typeof wineData.image === "string"
      ? wineData.image
      : "not_found_img"
  );
  const { mutate: postWine } = usePostWine();
  const { mutate: patchWine } = usePatchWine();

  const onSubmit = async (data: WineFormData) => {
    const price = Number(data.price);

    if (wineData) {
      const avgRating = wineData.avgRating || 0;
      const patchData = { ...data, price, avgRating, image: imgUrl };
      const path = Number(id);

      patchWine({ patchData, path });
    } else {
      const registerData = { ...data, price: price, image: imgUrl };
      postWine({ registerData });
    }
  };

  /**
   * 이미지 미리보기 url을 만들고, 실제 이미지 경로를 받아온다.
   * @author hwitae
   * @param e input 파일 선택 이벤트
   */
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const uploadImg = e.target.files?.[0];

    if (!uploadImg) return;

    if (previewImgUrl) URL.revokeObjectURL(previewImgUrl);

    const newPreviewImgUrl = URL.createObjectURL(uploadImg);
    setPreviewImgUrl(newPreviewImgUrl);

    const { url } = await postImage({ url: uploadImg });
    setImgUrl(url);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pb-40 tablet:pb-0 pc:pb-0"
    >
      <div className="flex flex-col gap-[18px] pb-6 tablet:pb-16 pc:pb-16">
        {previewImgUrl ? (
          <label
            htmlFor="changeImg"
            className={cn("cursor-pointer", REGISTER_STYLES.label)}
          >
            <Image
              src={previewImgUrl ? previewImgUrl : ""}
              layout="fill"
              alt="미리보기 이미지"
              className={REGISTER_STYLES.img}
              draggable={false}
            />
            <Icon
              icon="CameraIcon"
              size={"lg"}
              className={cn(
                REGISTER_STYLES.icon,
                "text-gray-600 opacity-0 duration-100 group-hover:opacity-100"
              )}
            />
            <input
              type="file"
              id="changeImg"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <>
            <WineImg
              isError={errors.image ? true : false}
              errorMsg={errors.image && errors.image.message}
              {...register("image", { required: "와인 사진은 필수입니다." })}
              onChange={handleFileChange}
              autoFocus
            />
          </>
        )}

        <TextInput
          id="name"
          title="와인 이름"
          placeholder="와인 이름 입력"
          className="w-full"
          isError={errors.name ? true : false}
          errorMsg={errors.name && errors.name?.message}
          variant="modal"
          {...register("name", {
            required: "와인 이름은 필수 입력입니다.",
            validate: (value) =>
              value.trim() !== "" || "공백으로 입력할 수 없습니다.",
          })}
        />
        <TextInput
          id="price"
          title="가격"
          placeholder="가격 입력"
          variant="modal"
          isError={errors.price ? true : false}
          errorMsg={errors.price && errors.price.message}
          {...register("price", {
            required: "가격은 필수 입력입니다.",
            pattern: {
              value: /^[1-9][0-9]*$/,
              message: "올바른 숫자 형식을 입력해주세요.",
            },
            validate: (value) =>
              value.toString().trim() !== "" || "공백으로 입력할 수 없습니다.",
          })}
        />
        <SelectType
          id="wine-type"
          isError={errors.type ? true : false}
          name="type"
          register={register}
        />
        <TextInput
          id="region"
          title="원산지"
          placeholder="원산지 입력"
          variant="modal"
          isError={errors.region ? true : false}
          errorMsg={errors.region && errors.region.message}
          {...register("region", {
            required: "원산지는 필수 입력입니다.",
            validate: (value) =>
              value.toString().trim() !== "" || "공백으로 입력할 수 없습니다.",
          })}
        />
      </div>
      <PageModalBtnWrapper className="tablet:px-0 pc:px-0">
        <Button label="와인 등록하기" />
      </PageModalBtnWrapper>
    </form>
  );
};

export default RegisterWine;
