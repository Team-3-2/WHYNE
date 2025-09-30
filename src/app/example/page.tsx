"use client";

import {
  Chip,
  DropdownMenu,
  Flavor,
  Header,
  SelectType,
  TextInput,
} from "@/components";
import LikeButton from "@/components/button/like-button";
import AlertModal from "@/components/modal/alert-modal";
import Profile from "@/components/profile/profile";
import Searchbar from "@/components/searchbar/searchbar";
import WineImg from "@/components/wine-img/wine-img";
import React, { ChangeEvent, useState } from "react";

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
        <DropdownMenu
          items={[
            { label: "마이페이지", href: "/my-page" },
            { label: "로그아웃", onClick: () => console.log("로그아웃") },
          ]}
        />
        <DropdownMenu
          items={[
            { label: "example", href: "/example" },
            { label: "임시", onClick: () => console.log("임시") },
          ]}
        />
        <DropdownMenu
          items={[
            { label: "수정하기", onClick: () => console.log("수정하기") },
            { label: "삭제하기", onClick: () => console.log("삭제하기") },
          ]}
        />
        <DropdownMenu
          items={[
            { label: "메인페이지", href: "/" },
            { label: "버튼클릭", onClick: () => console.log("버튼클릭") },
          ]}
        />
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

      <br />
      <section>
        <TextInput onChange={handleChange} />
        <br />
        <TextInput
          onChange={handleChange}
          isError={true}
          errorMsg="에러입니다"
        />
      </section>

      <br />
      <section>
        <Profile />
        <Profile url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Allosaurus_BW.jpg/120px-Allosaurus_BW.jpg" />
      </section>

      <br />
      <section>
        <WineImg />
        <WineImg isError={true} errorMsg="와인 사진은 필수" />
      </section>

      <section>
        <Searchbar onChange={handleChange} />
      </section>

      <section>
        <LikeButton count={24} />
        <LikeButton count={24} isLike={true} />
      </section>

      <section>
        <AlertModal isOpen={false} msg={{ text: "정말 삭제하시겠습니까?" }} />
      </section>

      <br />
    </div>
  );
};

export default Page;
