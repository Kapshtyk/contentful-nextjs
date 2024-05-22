"use client";

import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { motion } from "framer-motion";

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
  const Tag = motion[`h${level}` as keyof typeof motion] as React.ElementType;
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
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
