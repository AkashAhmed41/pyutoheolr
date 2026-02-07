import Link from "next/link";
import { ArrowRightIcon } from "@/lib/svg/icons";
import { getLocalizedText } from "@/lib/utils/CommonUtils";

interface ViewAllButtonProps {
  href: string;
}

const ViewAllButton = ({ href }: ViewAllButtonProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
    >
      {getLocalizedText("HOMEPAGE", "VIEW_ALL")}
      <ArrowRightIcon className="w-4 h-4" />
    </Link>
  );
};

export default ViewAllButton;
