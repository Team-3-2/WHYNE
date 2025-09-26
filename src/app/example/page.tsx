import { SelectType } from "@/components";
import Header from "@/components/header/Header";
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
        <SelectType isError={false} />
        <br />
        <SelectType isError={true} />
      </section>
    </div>
  );
};

export default Page;
