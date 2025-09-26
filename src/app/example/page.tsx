"use client";

import { SelectType } from "@/components";
import Header from "@/components/header/Header";
import React, { ChangeEvent } from "react";

const Page = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Header
        review="5,446"
        title="Sentinel Carbernet Sauvignon 2016"
        description="Western Cape, South Africa"
        price="64,990"
      />

      <section>
        <SelectType isError={false} onChange={handleChange} />
        <br />
        <SelectType isError={true} />
      </section>
    </div>
  );
};

export default Page;
