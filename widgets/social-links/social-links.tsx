"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

import { Contact, ContactDetails } from "@/lib/graphql/generate/graphql";

export const SocialLinks = () => {
  const { data: contacts } = useQuery<ContactDetails>({
    queryKey: ["contacts"],
  });

  console.log(contacts);

  if (!contacts?.contactCollection?.items?.length) {
    return null;
  }

  const getContact = (contact: Contact) => {
    if (!contact.value) {
      return null;
    }
    switch (contact.type) {
      case "email":
        return (
          <Link key={contact.title} href={`mailto:${contact.value}`}>
            <MailIcon size={24} />
          </Link>
        );
      case "tel":
        return (
          <Link
            key={contact.title}
            href={`tel:${contact.value.split(" ").join("")}`}
          >
            <PhoneIcon size={24} />
          </Link>
        );
      case "linkedin":
        return (
          <Link key={contact.title} href={contact.value}>
            <LinkedinIcon size={24} />
          </Link>
        );
      case "github":
        return (
          <Link key={contact.title} href={contact.value}>
            <GithubIcon size={24} />
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="@container">
      <ul className="flex w-full justify-between gap-4">
        {contacts.contactCollection.items.map((contact) => {
          if (contact && contact.value) {
            return (
              <li
                className="flex h-12 w-12 flex-wrap items-center justify-center rounded-full bg-primary text-white"
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
