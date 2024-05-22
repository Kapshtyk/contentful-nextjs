import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { getResumeByTitle } from "@/lib/api/resume";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  const resume = await getResumeByTitle(slug, true);

  if (!resume) {
    return new Response("Invalid slug", { status: 401 });
  } else {
    draftMode().enable();

    redirect(`${process.env.NEXT_PRODUCTION_URL}/resume/${resume.slug}`);
  }
}
