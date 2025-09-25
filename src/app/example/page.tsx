import { Chip, DropdownMenu, Flavor, Header } from "@/components";
import React from "react";

const Page = () => {
  return (
    <div className="flex-col-center gap-4">
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
      <div className="flex-center gap-4">
        <Chip label="후추" />
        <Chip label="후추" img="/images/test/test_chip.jpg" />
      </div>
      <div>
        <Flavor
          count={5}
          items={[
            { label: "체리", img: "/images/test/test_flavor.jpg" },
            { label: "체리", img: "/images/test/test_flavor.jpg" },
            { label: "체리", img: "/images/test/test_flavor.jpg" },
            { label: "체리", img: "/images/test/test_flavor.jpg" },
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
