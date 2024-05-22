import { draftMode } from "next/headers";

import { getFrontPage } from "@/lib/api/frontpage";

import { Frontpage } from "@/views";

export default async function Page({
  params,
}: {
  params: { locale: "en" | "ru" };
}) {
  const { isEnabled } = draftMode();
  console.log(params);
  const frontpage = await getFrontPage(isEnabled, params.locale);
  if (!frontpage) {
    return null;
  }
  return <Frontpage frontpage={frontpage} />;
}
