import { draftMode } from "next/headers";

import { getPostBySlug, getSlugs } from "@/lib/api/posts";
import ContentfulImage from "@/lib/contentful-image";

import { Heading } from "@/shared/ui/heading";
import { Paragraph } from "@/shared/ui/paragraph";

export async function generateStaticParams() {
  return await getSlugs();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const post = await getPostBySlug(params.slug, isEnabled);
  return (
    <section className="flex flex-col items-center">
      <div className="min-h-[100vh] w-[100vw] bg-foreground pt-20">
        <div className="container pb-20">
          <Heading level={1} className="text-background">
            {post?.title}
          </Heading>
          <Paragraph className="text-background">{post?.excerpt}</Paragraph>
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
      </div>
    </section>
  );
}
