interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {}

export const UnorderedList = ({
  children,
  className,
  ...props
}: UnorderedListProps) => {
  return (
    <ul className={`mb-2 ${className ? className : ""}`} {...props}>
      {children}
    </ul>
  );
};
