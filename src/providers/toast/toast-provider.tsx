"use client";

import { cn } from "@/lib/utils";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = (props: ToastContainerProps) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1500}
      newestOnTop
      closeButton={false}
      closeOnClick
      pauseOnHover
      className="mt-12 flex w-full flex-col gap-3"
      toastClassName={() =>
        cn(
          "relative flex items-center justify-start min-h-10 w-[300px] cursor-pointer overflow-hidden rounded-md",
          "bg-white backdrop-blur-md p-4 text-gray-900 shadow-lg"
        )
      }
      progressClassName="Toastify__progress-bar--animated"
      {...props}
    />
  );
};

export default ToastProvider;
