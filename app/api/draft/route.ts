import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { getPostBySlug } from "@/lib/api/posts";

export async function GET(request: Request) {
  const { searchParams, pathname } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const locale = pathname.split("/")[1] as "en" | "ru";
  console.log(locale);

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  const post = await getPostBySlug(slug, locale, true);

  if (!post) {
    return new Response("Invalid slug", { status: 401 });
  } else {
    draftMode().enable();

    redirect(`${process.env.NEXT_PRODUCTION_URL}/${post.slug}`);
  }
}
