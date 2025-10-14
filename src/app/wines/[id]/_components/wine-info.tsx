import Image from "next/image";
import PlaceholderImgWine from "@/../public/images/placeholder/img-wine.svg";
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
        {isValidImageSrc(image) ? (
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="62px"
            />
          </div>
        ) : (
          <PlaceholderImgWine
            className="h-full w-auto object-contain"
            role="img"
            aria-label={`${name} 이미지 불러오기 실패`}
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-body-md font-bold text-gray-900">{name}</h3>
        <p className="text-body-sm text-gray-500">{region}</p>
      </div>
    </div>
  );
};

export default WineInfo;
