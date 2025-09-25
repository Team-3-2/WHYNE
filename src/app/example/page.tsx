import Header from "@/components/header/Header";
import { ModalTextInput, TextInput } from "@/components/text-input/text-input";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header
        review="5,446"
        title="Sentinel Carbernet Sauvignon 2016"
        description="Western Cape, South Africa"
        price="64,990"
      />

      <section>
        <TextInput title="" placeholder="" errorMsg="" />
        <TextInput title="" placeholder="" errorMsg="에러가 발생했습니다." />
        <ModalTextInput
          title=""
          placeholder=""
          errorMsg="에러가 발생했습니다"
        />
      </section>
    </div>
  );
};

export default Page;
