"use client";

import { Button, SelectType, TextInput } from "@/components";
import PageModalBtnWrapper from "@/components/modal/page-modal-btn-wrapper";
import WineImg from "@/components/wine-img/wine-img";
import { isValidImageSrc } from "@/lib/utils";
import { WineFormData } from "@/types/wine";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterWine = ({ wineData }: { wineData: WineFormData | null }) => {
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
    wineData ? wineData.image : null
  );

  const onSubmit: SubmitHandler<WineFormData> = (data) => {
    console.log(data);
  };

  /**
   * 이미지 미리보기
   * @author hwitae
   * @param e input 파일 선택 이벤트
   */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0];
    console.log(imgFile);

    if (!imgFile) return;

    if (previewImgUrl) URL.revokeObjectURL(previewImgUrl);

    const newPreviewImgUrl = URL.createObjectURL(imgFile);
    setPreviewImgUrl(newPreviewImgUrl);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pb-40 tablet:pb-0 pc:pb-0"
    >
      <div className="flex flex-col gap-[18px]">
        {isValidImageSrc(previewImgUrl) ? (
          <label htmlFor="changeImg" className="w-fit cursor-pointer">
            <Image
              src={previewImgUrl}
              width={370}
              height={360}
              alt="미리보기 이미지"
            />
            <input
              type="file"
              id="changeImg"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <WineImg
            isError={errors.image ? true : false}
            errorMsg={errors.image && errors.image.message}
            {...register("image", { required: "와인 사진은 필수입니다." })}
            onChange={handleFileChange}
          />
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
          })}
        />
        <TextInput
          id="price"
          title="가격"
          placeholder="가격 입력"
          variant="modal"
          isError={errors.price ? true : false}
          errorMsg={errors.price && errors.price.message}
          {...register("price", { required: "가격은 필수 입력입니다." })}
        />
        <SelectType
          id="type"
          isError={errors.type ? true : false}
          {...register("type", { required: "와인 타입은 필수 입력입니다." })}
        />
        <TextInput
          id="region"
          title="원산지"
          placeholder="원산지 입력"
          variant="modal"
          isError={errors.region ? true : false}
          errorMsg={errors.region && errors.region.message}
          {...register("region", { required: "원산지는 필수 입력입니다." })}
        />
      </div>
      <PageModalBtnWrapper className="tablet:h-[130px] tablet:px-0 pc:h-[130px] pc:px-0">
        <Button label="와인 등록하기" />
      </PageModalBtnWrapper>
    </form>
  );
};

export default RegisterWine;
