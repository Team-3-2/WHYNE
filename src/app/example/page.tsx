import { DropdownMenu, Header } from "@/components";
import React from "react";

const Page = () => {
  return (
    <div className="flex-col-center">
      <Header
        review="5,446"
        title="Sentinel Carbernet Sauvignon 2016"
        description="Western Cape, South Africa"
        price="64,990"
      />
      <div className="flex-center gap-4">
        <DropdownMenu size="small" />
        <DropdownMenu size="large" />
      </div>
    </div>
  );
};

export default Page;
