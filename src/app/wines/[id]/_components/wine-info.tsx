import Image from "next/image";
import { isValidImageSrc } from "@/lib/utils";

interface WineInfoProps {
  name: string;
  region: string;
  image?: string | null;
}

const WineInfo = ({ name, region, image }: WineInfoProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-center h-[96px] w-[62px] flex-shrink-0 bg-gray-200">
        <div className="relative h-full w-full">
          {isValidImageSrc(image) ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="62px"
              draggable={false}
            />
          ) : (
            <Image
              src={"/images/placeholder/img-wine.svg"}
              fill
              className="object-contain"
              alt={`${name} 이미지 불러오기 실패`}
              draggable={false}
            />
          )}
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <h3
          title={name}
          className="truncate text-body-md font-bold text-gray-900"
        >
          {name}
        </h3>
        <p title={region} className="truncate text-body-sm text-gray-500">
          {region}
        </p>
      </div>
    </div>
  );
};

export default WineInfo;
