"use client";

import { Chip, DropdownMenu, Flavor, Header, SelectType } from "@/components";
import React, { ChangeEvent } from "react";

const Page = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex-col-center gap-4">
      <Header
        review="5,446"
        title="Sentinel Carbernet Sauvignon 2016"
        description="Western Cape, South Africa"
        price="64,990"
      />
      <div className="flex-center gap-4">
        <DropdownMenu />
      </div>
      <div className="flex-center gap-4">
        <Chip label="후추" />
        <Chip label="후추" img="/images/test/test_chip.jpg" />
      </div>
      <div>
        <Flavor
          count={5}
          items={[
            "CHERRY",
            "OAK",
            "VANILLA",
            "PEPPER",
            "BAKING",
            "GRASS",
            "APPLE",
            "PEACH",
            "CITRUS",
            "TROPICAL",
            "MINERAL",
            "FLOWER",
            "TOBACCO",
            "EARTH",
            "CHOCOLATE",
            "SPICE",
            "CARAMEL",
            "LEATHER",
            "EMPTY",
          ]}
        />
      </div>

      <section>
        <SelectType isError={false} onChange={handleChange} />
        <br />
        <SelectType isError={true} />
      </section>
    </div>
  );
};

export default Page;
