import Icon from "@/components/icon/icon";
import { showSuccessToast, showErrorToast } from "@/lib/toast";

const SEARCH_ICON = <Icon icon="SearchIcon" size="md" />;
const SEARCH_ERROR_ICON = <Icon icon="SearchIcon" color="red300" size="md" />;
const WINE_ICON = <Icon icon="WineIcon" size="md" />;
const WINE_ERROR_ICON = <Icon icon="WineIcon" color="red300" size="md" />;
const ALERT_ICON = <Icon icon="AlertIcon" size="md" />;
const ALERT_ERROR_ICON = <Icon icon="AlertIcon" color="red300" size="md" />;

/**
 * 기능별 토스트 메시지 헬퍼를 묶어 둔 커스텀 훅입니다.
 * @author junyeol
 * @example
 * ```tsx
 * const {
 *   reviewCreateSuccess,
 *   wineDeleteError,
 *   loginSuccess,
 * } = useToast();
 *
 * reviewCreateSuccess();
 * wineDeleteError("삭제에 실패했습니다. 다시 시도해 주세요.");
 * loginSuccess("로그인에 성공했습니다!");
 * ```
 * 각 메서드는 기본 메시지를 갖고 있으며, 원하는 문구로 덮어써서 호출할 수 있습니다.
 */
export const useToast = () => {
  return {
    reviewCreateSuccess: (msg = "리뷰 남기기 성공 !") =>
      showSuccessToast(msg, { icon: SEARCH_ICON }),
    reviewCreateError: (msg = "리뷰 남기기 실패 !") =>
      showErrorToast(msg, { icon: SEARCH_ERROR_ICON }),

    reviewUpdateSuccess: (msg = "리뷰 수정 성공 !") =>
      showSuccessToast(msg, { icon: SEARCH_ICON }),
    reviewUpdateError: (msg = "리뷰 수정 실패 !") =>
      showErrorToast(msg, { icon: SEARCH_ERROR_ICON }),

    reviewDeleteSuccess: (msg = "리뷰 삭제 성공 !") =>
      showSuccessToast(msg, { icon: SEARCH_ICON }),
    reviewDeleteError: (msg = "리뷰 삭제 실패 !") =>
      showErrorToast(msg, { icon: SEARCH_ERROR_ICON }),

    wineCreateSuccess: (msg = "와인 등록 성공 !") =>
      showSuccessToast(msg, { icon: WINE_ICON }),
    wineCreateError: (msg = "와인 등록 실패 !") =>
      showErrorToast(msg, { icon: WINE_ERROR_ICON }),

    wineUpdateSuccess: (msg = "와인 수정 성공 !") =>
      showSuccessToast(msg, { icon: WINE_ICON }),
    wineUpdateError: (msg = "와인 수정 실패 !") =>
      showErrorToast(msg, { icon: WINE_ERROR_ICON }),

    wineDeleteSuccess: (msg = "와인 삭제 성공 !") =>
      showSuccessToast(msg, { icon: WINE_ICON }),
    wineDeleteError: (msg = "와인 삭제 실패 !") =>
      showErrorToast(msg, { icon: WINE_ERROR_ICON }),

    loginSuccess: (msg = "로그인 성공 !") =>
      showSuccessToast(msg, { icon: ALERT_ICON }),
    loginError: (msg = "로그인 실패 !") =>
      showErrorToast(msg, { icon: ALERT_ERROR_ICON }),

    signupSuccess: (msg = "회원가입 성공 !") =>
      showSuccessToast(msg, { icon: ALERT_ICON }),
    signupError: (msg = "회원가입 실패 !") =>
      showErrorToast(msg, { icon: ALERT_ERROR_ICON }),
  };
};
