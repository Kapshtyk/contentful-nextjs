"use client";

import { HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  MotionProps & {
    className?: string;
  };

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`group:inline mb-2 group-[.list-inside]:inline ${className ? className : ""}`}
      {...props}
    >
      {children}
    </motion.p>
  );
};
