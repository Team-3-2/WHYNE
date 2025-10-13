"use client";

import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = (props: ToastContainerProps) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop
      closeButton={false}
      closeOnClick
      pauseOnHover
      toastClassName={() =>
        "relative flex-center min-h-10 cursor-pointer overflow-hidden rounded-md bg-white p-4 text-gray-900 shadow-lg"
      }
      progressClassName="Toastify__progress-bar--animated"
      {...props}
    />
  );
};

export default ToastProvider;
