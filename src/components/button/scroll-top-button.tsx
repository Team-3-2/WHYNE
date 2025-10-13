import useScrollVisibility from "@/hooks/use-scroll-visibility";
import { IconButton } from "@/components";

/**
 * 페이지 상단으로 스크롤하는 버튼 컴포넌트
 * @author yeonsu
 */

interface ScrollTopButtonProps {}

const ScrollTopButton = ({}: ScrollTopButtonProps) => {
  const isVisible = useScrollVisibility({ threshold: 0 });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <IconButton
      icon="ArrowTopIcon"
      iconSize="md"
      className="h-[40px] w-[40px] rounded-full border-gray-300 tablet:h-[50px] tablet:w-[50px] pc:h-[50px] pc:w-[50px]"
      onClick={scrollToTop}
      aria-label="최상단으로 이동"
    />
  );
};

export default ScrollTopButton;
