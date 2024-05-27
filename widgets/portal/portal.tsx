"use client";

import { createPortal } from "react-dom";

export const Portal = ({
  children,
  wrapperId = "modal",
}: {
  children: React.ReactNode;
  wrapperId: string;
}) => {
  if (typeof document === "undefined") {
    return null;
  }
  const wrapperElement = document.getElementById(wrapperId);

  if (!wrapperElement) {
    return null;
  }

  return createPortal(children, wrapperElement);
};
