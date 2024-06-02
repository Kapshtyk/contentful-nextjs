import Link from "next/link";

import ContentfulImage from "@/lib/contentful-image";
import { Post } from "@/lib/graphql/generate/graphql";

import { Paragraph } from "@/shared/ui/paragraph";

interface CardProps {
  post: Post;
}

export const Card = ({ post }: CardProps) => {
  return (
    <Link
      href={`/${post.slug}`}
      className="group relative mt-14 flex flex-col gap-4 bg-card p-4"
    >
      {post?.coverImage?.url && post.coverImage?.width && (
        <div
          style={{
            aspectRatio: `${post.coverImage.width} / ${post.coverImage.height}`,
          }}
          className="relative -mt-12 w-full overflow-hidden"
        >
          <ContentfulImage
            src={post.coverImage.url}
            fill={true}
            className="object-cover"
            alt={post.title}
          />
        </div>
      )}
      <Paragraph className="text-sm">{post.excerpt}</Paragraph>
    </Link>
  );
};
