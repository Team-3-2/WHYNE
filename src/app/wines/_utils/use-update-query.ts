import { useRouter, useSearchParams, usePathname } from "next/navigation";

/**
 * URL 쿼리 파라미터를 손쉽게 갱신하기 위한 커스텀 훅입니다.
 *
 * @author jikwon
 *
 * - `useSearchParams()`로 현재 쿼리를 읽고,
 * - `router.replace()`를 사용해 히스토리를 오염시키지 않고 URL만 갱신합니다.
 * - 전달받은 콜백(`mutate`)에서 URLSearchParams를 직접 수정할 수 있습니다.
 *
 * 사용 예시:
 * ```tsx
 * const { setQuery } = useUpdateQuery();
 *
 * setQuery((params) => {
 *   if (rating === "전체") params.delete("rating");
 *   else params.set("rating", rating);
 * });
 * ```
 *
 * @returns {object}
 *   - `setQuery`: 쿼리를 수정하고 URL을 갱신하는 함수
 *   - `searchParams`: 현재 URL의 쿼리 객체 (읽기 전용)
 */
export const useUpdateQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const setQuery = (mutate: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(searchParams);
    mutate(p);
    const qs = p.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return { setQuery, searchParams };
};
