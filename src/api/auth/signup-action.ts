"use server";

const signup = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const nickname = formData.get("nickname");
  const password = formData.get("password");
  const passwordConfirmation = formData.get("pwCheck");

  if (!email || !nickname || !password || !passwordConfirmation) {
    return { isError: true, message: "모든 입력 칸을 작성하세요" };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signUp`,
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          nickname,
          password,
          passwordConfirmation,
        }),
        method: "POST",
      }
    );

    if (!response.ok) return { isError: true, message: "다시 시도해주세요." };

    return { isError: false, message: "가입이 완료되었습니다." };
  } catch (error) {
    console.error(error);
  }
};

export default signup;
