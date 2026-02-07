import Link from "next/link";
import { ChevronRightIcon } from "@/lib/svg/icons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { appRouteList, getGenreSlug } from "@/lib/utils/PageRouteUtils";

interface ViewAllCardProps {
  genreName: string;
}

export default function ViewAllCard({ genreName }: ViewAllCardProps) {
  return (
    <Link
      href={appRouteList.genre(getGenreSlug(genreName))}
      className="group relative flex-shrink-0 w-[185px] cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-900 flex flex-col items-center justify-center gap-4 transition-colors">
        <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {getLocalizedText("HOMEPAGE", "VIEW_ALL")}
        </span>
        <div className="p-3 rounded-full bg-gray-800 group-hover:bg-blue-600 transition-colors">
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="mt-2 h-[42px]" aria-hidden="true" />
    </Link>
  );
}
