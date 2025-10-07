import Image from "next/image";

interface WineInfoProps {
  name: string;
  region: string;
  image?: string;
}

const WineInfo = ({ name, region, image }: WineInfoProps) => {
  const isValidImage =
    image &&
    (image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("/"));

  return (
    <div className="flex items-center gap-4">
      <div className="flex-center h-[96px] w-[62px] flex-shrink-0 bg-gray-200">
        {isValidImage ? (
          <Image
            src={image}
            alt={name}
            width={62}
            height={96}
            className="h-full w-auto object-contain"
            unoptimized={true}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <span className="text-xs text-gray-400">No Image</span>
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
