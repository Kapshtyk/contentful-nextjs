"use client";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { motion } from "framer-motion";

import ContentfulImage from "@/lib/contentful-image";
import { Education, Frontpage } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import Corner from "@/shared/icons/corner.svg";
import { Heading } from "@/shared/ui/heading";
import { Paragraph } from "@/shared/ui/paragraph";

export const AboutMe = ({
  description,
  education,
}: {
  description: Frontpage["description"];
  education: Education;
}) => {
  const locale = useLocale();
  if (!description || !education) {
    return null;
  }

  return (
    <>
      <div className="flex flex-wrap items-stretch justify-between gap-2 overflow-visible pr-0 md:pr-8 lg:flex-nowrap lg:gap-8">
        <div className="columns-1 md:columns-2 lg:block">
          <Markdown className="w-full" document={description.json} />
          {education && education?.educationCollection?.items && (
            <>
              <Heading level={3}>{education.title}</Heading>
              <ul className="flex flex-col gap-4">
                {education.educationCollection.items.map((ed) => (
                  <li key={ed?.title}>
                    <Paragraph>
                      <strong>
                        {ed?.title}
                        {": "}
                      </strong>
                    </Paragraph>
                    <Paragraph>
                      {ed?.institutionoremployer}
                      {", "}
                      {new Date(ed?.startDate).toLocaleDateString(locale, {
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {ed?.endDate
                        ? new Date(ed?.endDate).toLocaleDateString(locale, {
                            month: "long",
                            year: "numeric",
                          })
                        : "Present"}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {/* <div className="-ml-4 mt-6 flex w-dvw shrink-0 justify-center bg-primary shadow-[0px_65px_0px_0px] shadow-primary md:-order-1 md:m-0 md:w-2/6 md:bg-transparent md:shadow-none lg:order-none lg:mb-0">
          <motion.div
            className={clsx(
              "relative -mt-4 w-1/2 before:absolute before:-z-10 before:size-full before:bg-primary md:mt-0 md:h-fit md:w-full md:before:-bottom-4 md:before:-left-4",
            )}
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Corner
              aria-hidden="true"
              className="absolute -right-8 -top-8 hidden size-32  rotate-180 text-primary-foreground md:block"
            />

            {img?.url && img.width && (
              <ContentfulImage
                className="z-40 object-contain"
                src={img.url}
                sizes="(min-width: 768) 33vw, 50vw"
                width={img.width}
                height={img.height}
                alt={img.title}
                priority={true}
              />
            )}
          </motion.div>
        </div> */}
      </div>
    </>
  );
};
