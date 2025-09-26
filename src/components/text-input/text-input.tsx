import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface InputValue extends ComponentProps<"input"> {
  placeholder: string;
  errorMsg: string;
}

interface TextInputValue extends InputValue {
  title: string;
  variant?: "default" | "modal";
}

/**
 * 기본 Input
 * @param placeholder input의 placeholder
 * @param errorMsg 표출할 에러 메시지
 * @returns
 */
const Input = ({ placeholder, errorMsg, className, ...props }: InputValue) => {
  {
    /* TODO(휘태): 에러 아이콘 넣기 */
  }
  return (
    <input
      id="text-input"
      className={cn(
        "w-[303px]",
        "px-4 py-3",
        "rounded border border-gray-300",
        "text-default text-[14px] leading-5 tracking-[0.02em]",
        "placeholder:text-tertiary placeholder:text-body-sm placeholder:font-normal",
        "focus:outline-none",
        "pc:w-[400px] pc:text-[16px] pc:leading-6 pc:placeholder:text-body-md pc:placeholder:font-normal",
        errorMsg && "border-danger border-2"
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
  errorMsg,
  variant = "default",
}: TextInputValue) => {
  return (
    <>
      <div className={cn("flex flex-col gap-2")}>
        {variant === "modal" && (
          <>
            <div className="flex gap-2">
              <label
                className={
                  "text-body-sm font-bold tracking-[0.02em] text-gray-800"
                }
              >
                {title || "제목"}
              </label>
              {errorMsg && (
                <p className="text-danger text-body-sm">{errorMsg}</p>
              )}
            </div>
            <Input placeholder={placeholder} errorMsg={errorMsg} />
          </>
        )}

        {variant === "default" && (
          <>
            <label
              htmlFor="text-input"
              className={
                "text-body-sm font-bold tracking-[0.02em] text-gray-800"
              }
            >
              {title || "제목"}
            </label>
            <Input placeholder={placeholder} errorMsg={errorMsg} />
          </>
        )}
      </div>
      {variant === "default" && errorMsg && (
        <p className="text-danger mt-1 text-body-sm">{errorMsg}</p>
      )}
    </>
  );
};

export default TextInput;
