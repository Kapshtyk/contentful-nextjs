import { draftMode } from "next/headers";

import { getContacts, getResumeByTitle } from "@/lib/api/resume";

import { Resume } from "@/views/resume/resume";

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const resume = await getResumeByTitle(params.slug, isEnabled);
  // console.log(JSON.stringify(resume, null, 2));
  const contacts = await getContacts();
  if (!resume) return null;
  return <Resume resume={resume} contacts={contacts} />;
}
