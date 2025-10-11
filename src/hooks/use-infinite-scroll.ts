import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

/**
 * 무한 스크롤 API 응답 공통 타입
 * @author junyeol
 * @property list - 현재 페이지 아이템 배열
 * @property totalCount - 전체 아이템 수
 * @property nextCursor - 다음 페이지 커서 ( 없으면 null )
 */
export interface InfiniteScrollResponse<T> {
  list: T[];
  totalCount: number;
  nextCursor: number | null;
}

/**
 * 무한 스크롤 훅 옵션
 * @author junyeol
 * @property queryKey - 쿼리 키 배열
 * @property fetchFn - 데이터 가져오기 함수
 * @property enabled - 쿼리 활성화 여부
 * @property staleTime - 캐시 유지 시간
 * @property rootMargin - 관찰 영역 여백
 * @property threshold - 관찰 임계값
 */
interface UseInfiniteScrollOptions<T> {
  queryKey: (string | number | object)[];
  fetchFn: (
    pageParam: number | undefined
  ) => Promise<InfiniteScrollResponse<T>>;
  enabled?: boolean;
  staleTime?: number;
  rootMargin?: string;
  threshold?: number;
}

/**
 * 범용 무한 스크롤 커스텀 훅
 * @author junyeol
 */
export function useInfiniteScroll<T>({
  queryKey,
  fetchFn,
  enabled = true,
  staleTime = 60 * 1000,
  rootMargin = "200px",
  threshold = 0.1,
}: UseInfiniteScrollOptions<T>) {
  const observerRef = useRef<HTMLDivElement>(null);

  const queryResult = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchFn(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined as number | undefined,
    enabled,
    staleTime,
  });

  const { fetchNextPage, hasNextPage, isFetchingNextPage } = queryResult;

  useEffect(() => {
    if (
      !observerRef.current ||
      !hasNextPage ||
      isFetchingNextPage ||
      !enabled
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    enabled,
    threshold,
    rootMargin,
  ]);

  const allItems = queryResult.data?.pages.flatMap((page) => page.list) ?? [];
  const totalCount = queryResult.data?.pages[0]?.totalCount ?? 0;

  return {
    ...queryResult,
    allItems,
    totalCount,
    observerRef,
  };
}
