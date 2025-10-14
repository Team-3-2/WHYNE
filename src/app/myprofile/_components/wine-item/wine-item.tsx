"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useDeleteWine from "@/hooks/api/wines/use-delete-wine";
import { useToast } from "@/hooks/use-toast";
import { Card, ConfirmModal } from "@/components";
import { WineType } from "@/app/myprofile/_types/review-type";

const WineItem = ({ wine }: { wine: WineType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const { mutate: deleteWine, isPending: deletePending } = useDeleteWine();

  const { wineDeleteSuccess, wineDeleteError } = useToast();

  const handleWineDelete = () => {
    deleteWine(
      { id: wine.id },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          wineDeleteSuccess();
          router.refresh();
        },
        onError: () => {
          wineDeleteError();
        },
      }
    );
  };

  return (
    <>
      <Card
        href={`/wines/${wine.id}`}
        image={wine.image}
        name={wine.name}
        region={wine.region}
        price={wine.price}
        actionMenuItems={[
          { label: "수정하기", href: `/register/${wine.id}` },
          { label: "삭제하기", onClick: () => setIsModalOpen(true) },
        ]}
      />
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleWineDelete}
        className="max-w-[353px]"
        msg={{
          text: `'${wine.name}' 와인을\n 정말 삭제할까요?`,
          cancelMsg: "취소",
          confirmMsg: deletePending ? "삭제 중..." : "삭제하기",
        }}
      />
    </>
  );
};

export default WineItem;
