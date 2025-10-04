import { cn } from "@/lib/utils";
import Link from "next/link";

interface TextProps {
  text: string;
  redirectText: string;
  url: string;
}

const AuthRedirect = ({ text, redirectText, url }: TextProps) => {
  return (
    <p
      className={cn(
        "text-sm font-normal leading-4 text-gray-400",
        "tablet:text-base",
        "pc:text-base"
      )}
    >
      {text}{" "}
      <Link
        href={url}
        className={cn(
          "text-sm font-medium leading-[19px] text-purple-100 underline",
          "tablet:text-base",
          "pc:text-base"
        )}
      >
        {redirectText}
      </Link>
    </p>
  );
};

export default AuthRedirect;
