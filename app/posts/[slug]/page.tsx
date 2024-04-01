import { draftMode } from "next/headers";

import { getPostBySlug, getSlugs } from "@/lib/api/posts";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const post = await getPostBySlug(params.slug, isEnabled);
  return (
    <div className="container mx-auto px-5">
      <h1 className="font-semibold text-6xl leading-tight">{post?.title}</h1>
      <p className="font-light text-lg leading-loose">{post?.excerpt}</p>
    </div>
  );
}
