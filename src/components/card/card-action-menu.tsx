import IconButton from "@/components/button/icon-button";
import DropdownMenu from "@/components/dropdown-menu/dropdown-menu";

type DropdownItem = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

/**
 * 카드 정보 우측 상단 액션 메뉴 컴포넌트
 * @param isOpen : 메뉴 열림 상태
 * @param toggleMenu : 메뉴 열림 상태 토글 함수
 * @param closeMenu : 메뉴 닫기 함수
 * @param items : 드롭다운 메뉴 아이템 배열
 */

interface CardActionMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  items: DropdownItem[];
}

const CardActionMenu = ({ isOpen, toggleMenu, items }: CardActionMenuProps) => {
  return (
    <>
      <IconButton
        icon="HamburgerIcon"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu();
        }}
        className="active:text-color-transparent radius-[1px] h-[26px] w-[26px] border-0 text-[#9FACBD] active:bg-gray-100 tablet:h-[26px] tablet:w-[26px] pc:h-[26px] pc:w-[26px]"
      />
      {isOpen && (
        <DropdownMenu
          className="absolute right-0 top-[100%] mt-[19px] pc:mt-[25px]"
          items={items}
        />
      )}
    </>
  );
};

export default CardActionMenu;
