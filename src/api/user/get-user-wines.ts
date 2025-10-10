import instance from "@/lib/axios";

/**
 * 내가 만든 와인 목록 조회
 * @author yeonsu
 * @param limit : 조회할 와인 개수
 */

interface GetUserWinesData {
  limit: number;
}

const getUserWines = async ({ limit }: GetUserWinesData) => {
  const res = await instance.get(`/users/me/wines?limit=${limit}`);

  return {
    ...res.data,
    list: [...res.data.list].reverse(),
  };
};

export default getUserWines;
