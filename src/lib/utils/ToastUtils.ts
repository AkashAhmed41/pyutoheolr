import { ToastMessage } from "@/components/common/Toast";
import { TOAST_DEFAULT_DURATION } from "../constants/ApplicationConstants";

export const showToast = (
  message: string,
  type: ToastMessage["type"] = "info",
  duration = TOAST_DEFAULT_DURATION,
) => {
  const event = new CustomEvent("show-toast", {
    detail: { message, type, duration },
  });
  window.dispatchEvent(event);
};
