"use client";

import postImage from "@/api/image/post-image";
import { Button, SelectType, TextInput } from "@/components";
import PageModalBtnWrapper from "@/components/modal/page-modal-btn-wrapper";
import WineImg from "@/components/wine-img/wine-img";
import usePatchWine from "@/hooks/api/wines/use-patch-wine";
import usePostWine from "@/hooks/api/wines/use-post-wine";
import { WineFormData } from "@/types/wine";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

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
      const patchData = { ...data, price, avgRating };
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
      <div className="flex flex-col gap-[18px]">
        {previewImgUrl ? (
          <label htmlFor="changeImg" className="w-fit cursor-pointer">
            <Image
              src={previewImgUrl ? previewImgUrl : ""}
              width={360}
              height={370}
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
