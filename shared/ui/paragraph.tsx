interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={`group:inline mb-2 group-[.list-inside]:inline ${className ? className : ""}`}
      {...props}
    >
      {children}
    </p>
  );
};
