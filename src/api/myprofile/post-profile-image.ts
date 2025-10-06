import instance from "@/lib/axios";

interface ProfileData {
  image?: string;
  nickname?: string;
}

export default async function patchProfile(data: ProfileData) {
  const formData = new FormData();

  if (data.image) {
    formData.append("image", data.image);
  }

  if (data.nickname) {
    formData.append("nickname", data.nickname);
  }

  const response = await instance.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}
