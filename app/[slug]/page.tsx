import { draftMode } from "next/headers";

import { getPostBySlug, getSlugs } from "@/lib/api/posts";
import ContentfulImage from "@/lib/contentful-image";

export async function generateStaticParams() {
  return await getSlugs();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const post = await getPostBySlug(params.slug, isEnabled);
  return (
    <div className="container">
      <h1 className="text-6xl font-semibold leading-tight">{post?.title}</h1>
      <p className="text-lg font-light leading-loose">{post?.excerpt}</p>
      {post?.coverImage?.url && (
        <div className="relative h-56 w-96">
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
