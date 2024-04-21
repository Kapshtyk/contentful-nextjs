import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5;
  styledAs?: 1 | 2 | 3 | 4 | 5;
}

export const Heading = ({
  level,
  styledAs = level,
  children,
  className,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements & React.ElementType;

  switch (styledAs) {
    case 1:
      return (
        <Tag {...props} className={`heading-1 ${className ? className : ""}`}>
          {children}
        </Tag>
      );
    case 2:
      return (
        <Tag {...props} className={`heading-2 ${className ? className : ""}`}>
          {children}
        </Tag>
      );
    case 3:
      return (
        <Tag {...props} className={`heading-3 ${className ? className : ""}`}>
          {children}
        </Tag>
      );
    case 4:
      return (
        <Tag {...props} className={`heading-4 ${className ? className : ""}`}>
          {children}
        </Tag>
      );
    case 5:
      return (
        <Tag {...props} className={`heading-5 ${className ? className : ""}`}>
          {children}
        </Tag>
      );
    default:
      return <Tag {...props}>{children}</Tag>;
  }
};
