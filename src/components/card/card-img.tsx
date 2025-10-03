import Image from "next/image";

/**
 * 카드 이미지 컴포넌트
 * @param src : 이미지 경로
 * @param alt : 이미지 대체 텍스트
 * @param blurDataURL : 블러 처리된 이미지 경로 (로딩 시 사용)
 */

const BASE64 =
  "data:image/png;base64," +
  "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAChSURBVHgBrVIxDgMhDINQdWFCYuJf/Ad+ysjOBm1oqHSnDheutOclg4ljWwjxByRH9N43ThLw6A2ICVJKz6HD8dNlAJBTniNijLK1Njyzy4cM5YWc86OUIo0xaK29kUj/9nKvtb6FSQCWbA/Lm90xOeusqlJqnxRjbZma3i9z4AqTVBhSXqG1Fs45WClMIOLp5VPbP2FY997fQwjw8c+vwwsO1jslqXlK7AAAAABJRU5ErkJggg==";

interface CardImageProps {
  src: string;
  alt: string;
  blurDataURL?: string;
}

const CardImage = ({ src, alt, blurDataURL }: CardImageProps) => {
  return (
    <div className="flex-center relative aspect-[1/1] w-full overflow-hidden bg-gray-200 p-[12%]">
      <span className="relative block h-full w-full">
        <Image
          src={src}
          fill
          alt={alt}
          className="object-contain"
          sizes="auto 100%"
          placeholder="blur"
          blurDataURL={blurDataURL ?? BASE64}
        />
      </span>
    </div>
  );
};

export default CardImage;
