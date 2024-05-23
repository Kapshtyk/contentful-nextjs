import clsx from "clsx";

import Quote from "@/shared/icons/quote.svg";

interface BlockquoteProps {
  children: React.ReactNode;
  inversed?: boolean;
}

export const Blockquote = ({ children, inversed = false }: BlockquoteProps) => {
  return (
    <blockquote
      className={clsx(
        "relative max-w-lg border-l-[12px] border-primary py-4 pl-4 italic md:border-l-[24px]",
        {
          ["border-white"]: inversed,
        },
      )}
    >
      <Quote
        className={clsx(
          "absolute -top-6 right-0 -z-10 h-16 w-16 text-primary md:-right-6",
          {
            ["text-white"]: inversed,
          },
        )}
      />
      {children}
    </blockquote>
  );
};
