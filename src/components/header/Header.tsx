"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getLocalizedText } from "@/lib/utils/CommonUtils";
import SearchInputField from "./SearchInputField";
import {
  HEADER_VISIBLE_THRESHOLD,
  INITIAL_HEADER_SCROLL_POSITION,
} from "@/lib/constants/ApplicationConstants";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(
    INITIAL_HEADER_SCROLL_POSITION,
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < HEADER_VISIBLE_THRESHOLD) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto h-[80px] px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent uppercase tracking-wider">
            {getLocalizedText("HEADER", "TITLE")}
          </span>
        </Link>
        <div className="flex-1 max-w-[400px] ml-4">
          <SearchInputField />
        </div>
      </div>
    </header>
  );
}
