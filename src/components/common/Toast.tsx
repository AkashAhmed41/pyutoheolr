"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  TOAST_DEFAULT_DURATION,
  TOAST_TRANSITION_DURATION,
} from "@/lib/constants/ApplicationConstants";

export interface ToastMessage {
  message: string;
  duration?: number;
  type?: "info" | "success" | "error";
}

export default function Toast() {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showToast = useCallback((event: CustomEvent<ToastMessage>) => {
    setToast(event.detail);
    setIsVisible(true);

    const duration = event.detail.duration || TOAST_DEFAULT_DURATION;

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setToast(null), TOAST_TRANSITION_DURATION);
    }, duration);
  }, []);

  useEffect(() => {
    window.addEventListener("show-toast" as any, showToast);
    return () => window.removeEventListener("show-toast" as any, showToast);
  }, [showToast]);

  if (!toast) return null;

  const typeStyles: Record<string, string> = {
    info: "bg-blue-600",
    success: "bg-green-600",
    error: "bg-red-600",
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className={`${typeStyles[toast.type || "info"]} text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md bg-opacity-90`}
      >
        <span className="text-sm font-medium whitespace-nowrap">
          {toast.message}
        </span>
      </div>
    </div>
  );
}
