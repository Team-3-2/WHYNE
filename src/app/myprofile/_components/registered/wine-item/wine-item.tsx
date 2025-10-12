"use client";

import { Card } from "@/components";
import useDeleteWine from "@/hooks/api/wines/use-delete-wine";
import { WineType } from "../../../_types/review-type";

const WineItem = ({ wine }: { wine: WineType }) => {
  const { mutate } = useDeleteWine();
  const handleWineDelete = () => {
    mutate({ id: wine.id });
  };

  return (
    <Card
      image={wine.image}
      name={wine.name}
      region={wine.region}
      price={wine.price}
      actionMenuItems={[
        { label: "수정하기", onClick: () => {} },
        { label: "삭제하기", onClick: handleWineDelete },
      ]}
    />
  );
};

export default WineItem;
