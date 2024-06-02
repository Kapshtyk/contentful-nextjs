import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { getEducation, getFrontPage } from "@/lib/api/frontpage";
import { getHighlightedPosts } from "@/lib/api/posts";

import { Frontpage } from "@/views";

export default async function Page({
  params,
}: {
  params: { locale: "en" | "ru" };
}) {
  unstable_setRequestLocale(params.locale);
  const { isEnabled } = draftMode();
  const frontpage = await getFrontPage(isEnabled, params.locale);
  if (!frontpage) {
    return null;
  }
  const highlightedPosts = await getHighlightedPosts(
    frontpage?.highlightedProjects?.sys?.id ?? "",
    params.locale,
  );

  const education = await getEducation(
    frontpage?.education?.sys?.id ?? "",
    params.locale,
  );

  return (
    <Frontpage
      frontpage={frontpage}
      highlightedProjects={highlightedPosts}
      education={education}
    />
  );
}

export const revalidate = 7200;
