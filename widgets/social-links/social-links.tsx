"use client";

import { useQuery } from "@tanstack/react-query";

import { getContacts } from "@/lib/api/contacts";

export const SocialLinks = () => {
  const { data: contacts } = useQuery({
    queryKey: ["contacnts"],
    queryFn: getContacts,
  });

  if (!contacts) {
    return null;
  }

  return (
    <div>
      {contacts.map(
        (contact) =>
          contact.value && (
            <a
              key={contact.sys.id}
              href={contact.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.title}
            </a>
          ),
      )}
    </div>
  );
};
