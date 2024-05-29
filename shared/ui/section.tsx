import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  inversed?: boolean;
}

export const Section = ({
  children,
  className,
  inversed = false,
  ...props
}: SectionProps) => {
  return (
    <section
      data-style={inversed ? "inversed" : "default"}
      {...props}
      className={clsx(
        "section z-40 data-[style=inversed]:bg-primary",
        className,
      )}
    >
      <div className="container flex flex-col">{children}</div>
    </section>
  );
};
