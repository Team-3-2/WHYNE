import { cn } from "@/lib/utils";
import Image from "next/image";
import redWine from "../../../public/images/wine-type/red.jpg";
import whiteWine from "../../../public/images/wine-type/white.jpg";
import sparklingWine from "../../../public/images/wine-type/sparkling.jpg";
import { ComponentProps } from "react";
import { UseFormRegister } from "react-hook-form";
import { WineFormData } from "@/types/wine";

const imgMap = {
  RED: redWine,
  WHITE: whiteWine,
  SPARKLING: sparklingWine,
} as const;

type WineType = keyof typeof imgMap;

interface SelectTypeValue extends ComponentProps<"input"> {
  isError: boolean;
  className?: string;
  register: UseFormRegister<WineFormData>;
}

interface TypeInputProps extends ComponentProps<"input"> {
  id: string;
  name: string;
  onClick?: () => void;
  className?: string;
  labelClassName?: string;
  value: WineType;
}

export const TypeInput = ({
  id,
  name,
  onClick,
  className,
  labelClassName,
  value,
  ...props
}: TypeInputProps) => {
  const imgSrc = imgMap[value] || "";
  const typeName = value.slice(0, 1) + value.slice(1).toLowerCase();

  return (
    <div
      className={cn(
        "h-[38px] w-fit",
        "border-border-secondary rounded-full border",
        "flex items-center",
        "bg-white",
        "tablet:h-[48px]",
        "pc:h-[48px]",
        className
      )}
      {...props}
      onClick={onClick}
    >
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={cn(
          "py-[7px] pl-2 pr-3",
          "flex-center gap-[6px]",
          "cursor-pointer rounded-full",
          "text-default hover:bg-gray-200",
          "peer-checked:bg-gray-800 peer-checked:text-white",
          "tablet:gap-2 tablet:py-2 tablet:pl-2 tablet:pr-4",
          "pc:gap-2 pc:py-2 pc:pl-2 pc:pr-4",
          labelClassName
        )}
      >
        <Image
          className={cn(
            "h-6 rounded-full object-cover",
            "tablet:h-8 tablet:w-8",
            "pc:h-8 pc:w-8"
          )}
          src={imgSrc}
          width={24}
          height={24}
          alt="레드와인"
          draggable={false}
        />
        <span className="text-body-sm tracking-[-0.02em] tablet:text-body-md pc:text-body-md">
          {typeName}
        </span>
      </label>
    </div>
  );
};

const SelectType = ({
  isError,
  className,
  register,
  ...props
}: SelectTypeValue) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <p className="text-body-sm tracking-[-0.02em] text-default">타입</p>
        {isError && (
          <p className="text-component-notes-md tracking-[-0.02em] text-red-400">
            와인 타입은 필수 입력이에요
          </p>
        )}
      </div>
      <div className={cn("flex flex-wrap gap-[10px]", className)} {...props}>
        <TypeInput
          id={"wine-red"}
          value="RED"
          {...register("type", { required: "와인 타입은 필수 입력입니다." })}
        />
        <TypeInput
          id={"wine-white"}
          value="WHITE"
          {...register("type", { required: "와인 타입은 필수 입력입니다." })}
        />
        <TypeInput
          id={"wine-spark"}
          value="SPARKLING"
          {...register("type", { required: "와인 타입은 필수 입력입니다." })}
        />
      </div>
    </div>
  );
};

export default SelectType;
