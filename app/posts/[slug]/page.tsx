import { draftMode } from "next/headers";

import { getPostBySlug, getSlugs } from "@/lib/api/posts";
import ContentfulImage from "@/lib/contentful-image";

export async function generateStaticParams() {
  return await getSlugs();
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
      {post?.coverImage?.url && (
        <div className="relative w-96 h-56">
          <ContentfulImage
            src={post.coverImage.url}
            fill={true}
            className="object-cover"
            alt={post.title}
          />
        </div>
      )}
    </div>
  );
}
