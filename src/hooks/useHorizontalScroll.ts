"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  HORIZONTAL_SCROLL_AMOUNT,
  HORIZONTAL_SCROLL_THRESHOLD,
  SCROLL_CHECK_DELAY,
} from "@/lib/constants/ApplicationConstants";

export function useHorizontalScroll(dependencies: any[] = []) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setShowLeftArrow(scrollLeft > HORIZONTAL_SCROLL_THRESHOLD);
      setShowRightArrow(
        scrollLeft + clientWidth < scrollWidth - HORIZONTAL_SCROLL_THRESHOLD,
      );
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkScroll, SCROLL_CHECK_DELAY);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, ...dependencies]);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: HORIZONTAL_SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -HORIZONTAL_SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  return {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
    checkScroll,
  };
}
