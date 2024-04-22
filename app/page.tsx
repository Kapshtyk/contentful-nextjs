import { getFrontPage } from "@/lib/api/frontpage";

import { Frontpage } from "@/views";

export default async function Page() {
  const frontpage = await getFrontPage();
  if (!frontpage) {
    return null;
  }
  return <Frontpage frontpage={frontpage} />;
}
