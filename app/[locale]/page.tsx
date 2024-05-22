import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { getFrontPage } from "@/lib/api/frontpage";

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
  return <Frontpage frontpage={frontpage} />;
}
