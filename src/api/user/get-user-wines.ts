import instance from "@/lib/axios";

/**
 * 내가 만든 와인 목록 조회
 * @author yeonsu
 * @param cursor : 다음 페이지 시작점 (무한 스크롤 시)
 * @param limit : 조회할 와인 개수
 */

interface GetUserWinesData {
  cursor?: number;
  limit: number;
}

const getUserWines = async ({ cursor, limit }: GetUserWinesData) => {
  const query = new URLSearchParams();

  query.append("limit", String(limit));
  if (cursor !== undefined) {
    query.append("cursor", String(cursor));
  }

  const res = await instance.get(`/users/me/wines?${query.toString()}`);

  return {
    ...res.data,
    list: [...res.data.list],
  };
};

export default getUserWines;
