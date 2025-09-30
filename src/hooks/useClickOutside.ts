import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
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
