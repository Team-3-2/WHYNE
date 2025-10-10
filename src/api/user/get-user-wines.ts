import instance from "@/lib/axios";

interface GetUserWinesData {
  limit: number;
}

const GetUserWines = async ({ limit }: GetUserWinesData) => {
  const res = await instance.get(`/users/me/wines?limit=${limit}`);

  return {
    ...res.data,
    list: [...res.data.list].reverse(),
  };
};

export default GetUserWines;
