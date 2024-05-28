"use client";

import { useTranslations } from "next-intl";

import Logo from "@/shared/icons/logo.svg";
import { Heading } from "@/shared/ui/heading";
import { Section } from "@/shared/ui/section";
import { SocialLinks } from "@/widgets/social-links";

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="relative flex min-h-screen flex-col justify-around bg-primary-foreground p-4 text-center text-white">
      <Section>
        <div className="relative grid h-full grid-cols-[300px_1fr] grid-rows-[auto_1fr] gap-4">
          <Heading className="col-span-2 text-balance text-right" level={2}>
            {t("footer-slogan")}
          </Heading>
          <div className="">
            <SocialLinks variant="dark" />
          </div>
          <Logo className="absolute bottom-4 right-4 hidden w-[120px] sm:block md:w-[200px]" />
        </div>
      </Section>
      <p className="text-center font-thin">
        {t("footer-end", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
};
