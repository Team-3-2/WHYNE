"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components";

interface WineItemProps {
  id: number;
  image: string;
  name: string;
  region: string;
  price: number;
}

//무한 스크롤 -

const WineItem = (props: WineItemProps) => {
  return <div></div>;
};

export default WineItem;
