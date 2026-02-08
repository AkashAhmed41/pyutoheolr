"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { appRouteList } from "@/lib/utils/PageRouteUtils";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import { SearchIcon } from "@/lib/svg/icons";
import InputField from "@/components/common/InputField";

export default function SearchInputField() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(appRouteList.search(query.trim()));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputField
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={getLocalizedText("HEADER", "SEARCH_PLACEHOLDER")}
      icon={
        <SearchIcon className="w-5 h-5 text-white hover:text-red-600 transition-colors cursor-pointer" />
      }
      onIconClick={handleSearch}
      wrapperClassName="w-full max-w-[400px]"
    />
  );
}
