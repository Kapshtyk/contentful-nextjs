"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import Quote from "@/shared/icons/quote.svg";

interface BlockquoteProps {
  children: React.ReactNode;
  inversed?: boolean;
}

export const Blockquote = ({ children, inversed = false }: BlockquoteProps) => {
  return (
    <motion.blockquote
      className={clsx(
        "relative -order-2 mb-4 w-full border-l-[12px] border-primary  p-4 italic md:w-[60%] md:border-l-[24px] lg:order-none lg:w-full lg:max-w-lg",
        {
          ["border-white"]: inversed,
        },
      )}
      initial={{ opacity: 0, x: -10 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Quote
        className={clsx(
          "absolute -top-6 right-0 -z-10 h-16 w-16 text-primary ",
          {
            ["text-white"]: inversed,
          },
        )}
      />
      {children}
    </motion.blockquote>
  );
};
