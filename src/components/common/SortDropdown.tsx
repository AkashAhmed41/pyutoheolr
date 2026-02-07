"use client";

import React, { useState, useRef, useEffect, Fragment } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getLocalizedText, generateQueryString } from "@/lib/utils/CommonUtils";
import { SortOptions } from "@/lib/constants/default-data/SortOptions";
import Button from "@/components/common/Button";
import { ChevronDownIcon } from "@/lib/svg/icons";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sortBy = searchParams.get("sort") || "popularity.desc";

  const selectedOption =
    SortOptions.find((opt) => opt.value === sortBy) || SortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    const queryString = generateQueryString(searchParams, {
      sort: value,
    });
    router.push(queryString);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-3" ref={containerRef}>
      <label className="text-sm font-medium text-gray-400 whitespace-nowrap">
        {getLocalizedText("GENRE_PAGE", "SORT_BY")}:
      </label>
      <div className="relative w-48 md:w-56">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between bg-gray-900 border text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 !scale-100 ${
            isOpen
              ? "border-yellow-500 ring-1 ring-yellow-500/20"
              : "border-gray-700 hover:border-gray-600"
          }`}
        >
          <span className="truncate">
            {getLocalizedText("GENRE_PAGE", selectedOption.label)}
          </span>
          <ChevronDownIcon
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-yellow-500" : ""
            }`}
          />
        </Button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {SortOptions.map((option, index) => (
              <Fragment key={option.value}>
                <Button
                  variant="ghost"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full !justify-start !px-4 !py-2.5 !rounded-none group ${
                    sortBy === option.value ? "!text-yellow-500 font-bold" : ""
                  }`}
                >
                  <span className="inline-block transition-transform duration-200 group-hover:scale-105 origin-left">
                    {getLocalizedText("GENRE_PAGE", option.label)}
                  </span>
                </Button>
                {index < SortOptions.length - 1 && (
                  <div className="mx-2 border-t border-gray-800/50" />
                )}
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
