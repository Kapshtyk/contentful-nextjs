import Quote from "@/shared/icons/quote.svg";

interface BlockquoteProps {
  children: React.ReactNode;
}

export const Blockquote = ({ children }: BlockquoteProps) => {
  return (
    <blockquote className="relative my-6 max-w-lg border-l-[24px] border-primary py-4 pl-4 italic">
      <Quote className="absolute -right-6 -top-6 -z-10 h-16 w-16 text-primary" />
      {children}
    </blockquote>
  );
};
