import { useEffect } from "react";

/**
 * 지정한 요소 외부 클릭 시 콜백 함수를 실행하는 훅입니다.
 * @param ref : 클릭 외부를 감지할 대상 요소의 ref
 * @param onClickOutside : 클릭 외부 감지 시 실행될 콜백 함수
 */

type Event = MouseEvent | TouchEvent;

const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  onClickOutside: (event: Event) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const targetRef = ref.current;

      if (targetRef && !targetRef.contains(event.target as Node)) {
        onClickOutside(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
