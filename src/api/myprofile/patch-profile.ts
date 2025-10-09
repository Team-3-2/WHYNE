import instance from "@/lib/axios";

interface ProfileData {
  image?: string;
  nickname?: string;
}

export default async function patchProfile(body: ProfileData) {
  if (!body.image && !body.nickname) {
    console.log("변경할 값이 없습니다.");
    return;
  }

  const res = await instance.patch("/users/me", body);

  return res.data;
}
