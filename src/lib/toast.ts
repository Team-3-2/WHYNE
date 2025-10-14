import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

export const showSuccessToast = (message: string, options?: ToastOptions) =>
  toast.success(message, options);

export const showErrorToast = (message: string, options?: ToastOptions) =>
  toast.error(message, options);
