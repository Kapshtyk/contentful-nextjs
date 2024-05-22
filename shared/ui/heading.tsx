import React from "react";
import clsx from "clsx";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5;
  styledAs?: 1 | 2 | 3 | 4 | 5;
  inversed?: boolean;
}

export const Heading = ({
  level,
  styledAs = level,
  inversed = false,
  children,
  className = "",
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements & React.ElementType;

  return (
    <Tag
      {...props}
      className={clsx({
        ["heading-1"]: styledAs === 1,
        ["heading-2"]: styledAs === 2,
        ["heading-3"]: styledAs === 3,
        ["heading-4"]: styledAs === 4,
        ["heading-5"]: styledAs === 5,
        ["text-white"]: inversed,
        [className]: className.length > 0,
      })}
    >
      {children}
    </Tag>
  );
};
