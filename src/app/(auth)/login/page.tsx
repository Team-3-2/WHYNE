"use client";

import { Button, TextInput } from "@/components";
import instance from "@/lib/axios";
import { ChangeEvent, useEffect, useState } from "react";

const login = async (data: any) => {
  try {
    const response = await instance.post("/auth/signIn", data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const Page = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
    // console.log(e.target.id);
  };

  const handleClick = async () => {
    const response = await login(formData);
    console.log(response);
  };

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  return (
    <div className="flex-col-center">
      <TextInput
        id="email"
        type="text"
        name="email"
        title="이메일"
        placeholder="이메일을 입력해주세요"
        onChange={handleChange}
      />
      <br />
      <TextInput
        type="password"
        id="password"
        name="password"
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      <br />
      <Button label="로그인" onClick={handleClick} />
    </div>
  );
};

export default Page;
