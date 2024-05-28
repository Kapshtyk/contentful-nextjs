"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

import { Contact, ContactDetails } from "@/lib/graphql/generate/graphql";

import TelegramIcon from "@/shared/icons/telegram.svg";

export const SocialLinks = ({
  variant = "light",
}: {
  variant?: "dark" | "light";
}) => {
  const { data: contacts } = useQuery<ContactDetails>({
    queryKey: ["contacts"],
  });
  const t = useTranslations();

  if (!contacts?.contactCollection?.items?.length) {
    return null;
  }

  const getContact = (contact: Contact) => {
    if (!contact.value || !contact.title) {
      return null;
    }
    switch (contact.type) {
      case "email":
        return (
          <Link key={contact.title} href={`mailto:${contact.value}`}>
            <MailIcon aria-hidden />
            <span>{t(contact.title as keyof IntlMessages)}</span>
          </Link>
        );
      case "tel":
        return (
          <Link
            key={contact.title}
            href={`tel:${contact.value.split(" ").join("")}`}
          >
            <PhoneIcon aria-hidden />
            <span>{t(contact.title as keyof IntlMessages)}</span>
          </Link>
        );
      case "linkedin":
        return (
          <Link key={contact.title} href={contact.value}>
            <LinkedinIcon aria-hidden />
            <span>{t(contact.title as keyof IntlMessages)}</span>
          </Link>
        );
      case "github":
        return (
          <Link key={contact.title} href={contact.value}>
            <GithubIcon aria-hidden />
            <span>{t(contact.title as keyof IntlMessages)}</span>
          </Link>
        );
      case "telegram":
        return (
          <Link key={contact.title} href={contact.value}>
            <TelegramIcon aria-hidden />
            <span>{t(contact.title as keyof IntlMessages)}</span>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="@container">
      <ul className="flex w-full flex-col justify-between gap-1 p-2 @xs:flex-row">
        {contacts.contactCollection.items.map((contact) => {
          if (contact && contact.value) {
            return (
              <li
                className={clsx(
                  "@xs:border-2 @xs:border-primary-foreground @xs:text-primary-foreground @xs:shadow-[-4px_4px_0px_0px] @xs:shadow-primary-foreground",
                  "flex h-auto w-auto items-center justify-start bg-transparent @xs:h-12 @xs:w-12 @xs:justify-center @xs:bg-white",
                  "[&_a]:flex [&_a]:w-full [&_a]:items-center [&_a]:gap-6 [&_a]:p-2 @xs:[&_a]:justify-center",
                  "[&_a>span]:not-sr-only @xs:[&_a>span]:sr-only",
                  "[&_a>svg]:h-8 [&_a>svg]:w-8 @xs:[&_a>svg]:h-[24px] @xs:[&_a>svg]:w-[24px]",
                  "transition-all duration-150 hover:bg-primary hover:text-white",
                  {
                    ["bg-transparent text-background"]: variant === "dark",
                    ["bg-primary text-white"]: variant === "light",
                  },
                )}
                key={contact.value}
              >
                {getContact(contact)}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
