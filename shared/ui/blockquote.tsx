import Quote from "@/shared/icons/quote.svg";

interface BlockquoteProps {
  children: React.ReactNode;
}

export const Blockquote = ({ children }: BlockquoteProps) => {
  return (
    <blockquote className="relative max-w-lg border-l-[24px] border-primary py-4 pl-4 italic">
      <Quote className="absolute -top-6 right-0 -z-10 h-16 w-16 text-primary md:-right-6" />
      {children}
    </blockquote>
  );
};
