import instance from "@/lib/axios";

interface ImageData {
  url: File;
}

export default async function postImage(data: ImageData) {
  const formData = new FormData();

  if (data.url) {
    formData.append("image", data.url);
  }

  const response = await instance.post(
    `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}
