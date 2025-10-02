import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import Icon from "../icon/icon";

interface InputValue extends ComponentProps<"input"> {
  placeholder?: string;
  isError?: boolean;
  errorMsg?: string;
  title?: string;
  variant?: "default" | "modal";
}

/**
 * 기본 Input
 * @param placeholder input의 placeholder
 * @param errorMsg 표출할 에러 메시지
 * @returns
 */
const Input = ({
  placeholder,
  isError,
  errorMsg,
  className,
  ...props
}: InputValue) => {
  return (
    <input
      id="text-input"
      className={cn(
        "w-[303px]",
        "px-4 py-3",
        "rounded border border-gray-300",
        "text-[14px] leading-5 tracking-[0.02em] text-gray-900",
        "placeholder:text-tertiary placeholder:text-body-sm placeholder:font-normal",
        "focus:outline-none",
        "tablet:w-[400px] tablet:text-body-md tablet:font-normal tablet:placeholder:text-body-md tablet:placeholder:font-normal",
        "pc:w-[400px] pc:text-body-md pc:font-normal pc:placeholder:text-body-md pc:placeholder:font-normal",
        isError && "border-2 border-red-400"
      )}
      type="text"
      placeholder={placeholder || "내용을 입력해주세요"}
      {...props}
    />
  );
};

/**
 * 기본 입력 창
 * @param title 제목
 * @param placeholder input의 placeholder
 * @param errorMsg 표출할 에러 메시지
 * @param variant 기본, 모달 중 선택
 * @returns input
 */
const TextInput = ({
  title,
  placeholder,
  isError,
  errorMsg,
  variant = "default",
  ...props
}: InputValue) => {
  return (
    <>
      <div className={cn("flex flex-col gap-2")}>
        {/* 타입이 모달일 때 */}
        {variant === "modal" && (
          <>
            <div className="flex gap-2">
              <label
                className={
                  "text-body-sm font-bold tracking-[0.02em] text-gray-950"
                }
              >
                {title || "제목"}
              </label>
              {isError && (
                <p className="text-body-sm text-red-400">{errorMsg}</p>
              )}
            </div>
            <div className="relative flex w-[303px] items-center tablet:w-[400px] pc:w-[400px]">
              <Input
                placeholder={placeholder}
                errorMsg={errorMsg}
                isError={isError}
                {...props}
              />
              <Icon
                className="absolute right-0 mr-[14px]"
                icon="AlertIcon"
                color="danger400"
                size={"sm"}
              />
            </div>
          </>
        )}

        {/* 기본 타입일 때 */}
        {variant === "default" && (
          <>
            <label
              htmlFor="text-input"
              className={
                "text-body-sm font-bold tracking-[0.02em] text-gray-950"
              }
            >
              {title || "제목"}
            </label>
            {isError ? (
              <div className="relative flex w-[303px] items-center tablet:w-[400px] pc:w-[400px]">
                <Input
                  placeholder={placeholder}
                  errorMsg={errorMsg}
                  isError={isError}
                  {...props}
                />
                <Icon
                  className="absolute right-0 mr-[14px]"
                  icon="AlertIcon"
                  color="danger400"
                  size={"sm"}
                />
              </div>
            ) : (
              <Input
                placeholder={placeholder}
                errorMsg={errorMsg}
                isError={isError}
                {...props}
              />
            )}
          </>
        )}
      </div>
      {variant === "default" && isError && (
        <p className="mt-1 text-body-sm text-red-400">{errorMsg}</p>
      )}
    </>
  );
};

export default TextInput;
