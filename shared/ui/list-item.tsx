interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}
export const ListItem = ({ children, className, ...props }: ListItemProps) => {
  return (
    <li
      className={`group list-inside list-disc marker:text-accent last-of-type:mb-0 ${className ? className : ""}`}
      {...props}
    >
      {children}
    </li>
  );
};
