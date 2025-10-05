// app/example/page.tsx
"use client";

import {
  Chip,
  DropdownMenu,
  Flavor,
  Header,
  SelectType,
  TextInput,
  Card,
  Button,
} from "@/components";
import LikeButton from "@/components/button/like-button";
import ConfirmModal from "@/components/modal/confirm-modal";
import Profile from "@/components/profile/profile";
import Searchbar from "@/components/searchbar/searchbar";
import WineImg from "@/components/wine-img/wine-img";
import WineTaste, {
  TasteData,
  getTasteDescription,
} from "@/components/wine-taste";
import { GaugeLevel } from "@/components/gauge/block-gauge";
import React, { ChangeEvent, useState } from "react";
import { recommendwinemock } from "@/mock";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DATA = recommendwinemock;

// WineTaste 테스트 컴포넌트 - 완전히 분리
const WineTasteTest = () => {
  // Detail 타입 상태와 핸들러
  const [detailTastes, setDetailTastes] = useState<TasteData[]>([
    { type: "바디감", data: 4 as GaugeLevel, taste: "진해요" },
    { type: "탄닌", data: 2 as GaugeLevel, taste: "부드러움" },
    { type: "당도", data: 1 as GaugeLevel, taste: "약간 단맛" },
    { type: "산미", data: 3 as GaugeLevel, taste: "적당함" },
  ]);

  // Review 타입 상태와 핸들러
  const [reviewTastes, setReviewTastes] = useState<TasteData[]>([
    { type: "바디감", data: 3 as GaugeLevel, taste: "중간" },
    { type: "탄닌", data: 5 as GaugeLevel, taste: "떫어요" },
    { type: "당도", data: 2 as GaugeLevel, taste: "약간 단맛" },
    { type: "산미", data: 4 as GaugeLevel, taste: "많이셔요" },
  ]);

  // Detail 타입 변경 핸들러
  const handleDetailChange = (index: number, newLevel: GaugeLevel) => {
    const newTastes = [...detailTastes];
    newTastes[index].data = newLevel;
    newTastes[index].taste = getTasteDescription(
      newTastes[index].type,
      newLevel
    );
    setDetailTastes(newTastes);
    console.log(
      `Detail 변경: ${newTastes[index].type} - ${newLevel} (${newTastes[index].taste})`
    );
  };

  // Review 타입 변경 핸들러
  const handleReviewChange = (index: number, newLevel: GaugeLevel) => {
    const newTastes = [...reviewTastes];
    newTastes[index].data = newLevel;
    newTastes[index].taste = getTasteDescription(
      newTastes[index].type,
      newLevel
    );
    setReviewTastes(newTastes);
    console.log(
      `Review 변경: ${newTastes[index].type} - ${newLevel} (${newTastes[index].taste})`
    );
  };

  return (
    <div
      className="mx-auto w-full max-w-4xl px-4 py-8"
      style={{ isolation: "isolate" }}
    >
      <h1 className="mb-8 text-2xl font-bold">WineTaste 컴포넌트 테스트</h1>

      {/* Detail 타입 */}
      <div
        className="mb-10 overflow-hidden rounded-xl bg-white"
        style={{ isolation: "isolate" }}
      >
        <div className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Detail 타입</h2>

          <div className="mx-auto w-full max-w-md">
            <WineTaste
              type="detail"
              tastes={detailTastes}
              onChange={handleDetailChange}
            />
          </div>
        </div>
      </div>

      {/* Review 타입 - max-w-3xl로 수정 */}
      <div
        className="overflow-hidden rounded-xl bg-white"
        style={{ isolation: "isolate" }}
      >
        <div className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Review 타입</h2>

          <div className="mx-auto w-full max-w-3xl">
            <WineTaste
              type="review"
              tastes={reviewTastes}
              onChange={handleReviewChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 메인 페이지 컴포넌트
const Page = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      {/* 스타일 격리를 위해 완전히 별도의 영역에 WineTasteTest 컴포넌트 배치 */}
      <div className="w-full border-b border-gray-200 bg-gray-50">
        <WineTasteTest />
      </div>

      <Button variant="outline" onClick={() => router.push("/wines/1680")}>
        페이지 모달 테스트
      </Button>

      {/* 기존 컴포넌트 영역 */}
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
          <SelectType isError={true} className="flex-col" />
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
          <Searchbar onChange={handleChange} className="pc:w-[500px]" />
        </section>
        <br />
      </div>
      <section>
        <Searchbar onChange={handleChange} />
      </section>

      <section>
        <h3 className="mb-[10px] text-body-lg">내가 등록한 와인</h3>
        <div className="grid max-w-[800px] grid-cols-1 gap-x-[64px] gap-y-[60px] tablet:grid-cols-2 pc:grid-cols-2">
          {DATA.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              region={item.region}
              price={item.price}
              actionMenu
            />
          ))}
        </div>
        <h3 className="mb-[10px] text-body-lg">와인 목록 페이지</h3>
        <div className="grid max-w-[800px] grid-cols-1 gap-x-[64px] gap-y-[60px] tablet:grid-cols-2 pc:grid-cols-2">
          {DATA.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              avgRating={item.avgRating}
              reviewCount={item.reviewCount}
              name={item.name}
              region={item.region}
              recentReview={item.recentReview}
              href={`/detail/${item.id}`}
            />
          ))}
        </div>
      </section>

      <section>
        <ConfirmModal
          isOpen={open}
          msg={{ text: "정말 삭제하시겠습니까?" }}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("삭제되었습니다.");
            setOpen(false);
          }}
        />
        <button onClick={() => setOpen(true)}>모달 열기</button>
      </section>

      <br />
      <section>
        <div className="relative">
          <DropdownMenu
            className="absolute right-0 top-10 w-40"
            itemClassName="px-3 py-2"
            activeClassName="bg-black text-white"
            items={[
              { label: "수정하기", onClick: () => console.log("edit") },
              { label: "상세보기", href: "/detail/1" },
            ]}
            aria-label="옵션 메뉴"
          />
        </div>
      </section>

      <section>
        <LikeButton count={642304} />
        <LikeButton count={5024} isLike={true} />
      </section>

      <br />
    </>
  );
};

export default Page;
