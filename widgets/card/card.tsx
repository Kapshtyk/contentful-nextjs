import Link from "next/link";

import ContentfulImage from "@/lib/contentful-image";
import { Post } from "@/lib/graphql/generate/graphql";

import { Badge } from "@/shared/ui/badge";
import { Heading } from "@/shared/ui/heading";
import { Paragraph } from "@/shared/ui/paragraph";

interface CardProps {
  post: Post;
}

export const Card = ({ post }: CardProps) => {
  return (
    <Link
      href={`/${post.slug}`}
      className="bg-card group relative mt-12 flex flex-col gap-4 rounded-lg p-4"
    >
      {post?.coverImage?.url && post.coverImage?.width && (
        <div
          style={{
            aspectRatio: `${post.coverImage.width} / ${post.coverImage.height}`,
          }}
          className="relative -mt-10 w-full overflow-hidden rounded-lg shadow-3xl"
        >
          <ContentfulImage
            src={post.coverImage.url}
            fill={true}
            className="object-cover"
            alt={post.title}
          />
        </div>
      )}
      <Heading level={3} className="mb-0">
        {post.title}
      </Heading>
      {post.contentfulMetadata.tags && (
        <div className="flex gap-2">
          {post.contentfulMetadata.tags.map((tag) => {
            if (!tag) {
              return null;
            }
            return (
              <Badge key={tag.name} variant="secondary">
                {tag.name}
              </Badge>
            );
          })}
        </div>
      )}
      <Paragraph>{post.excerpt}</Paragraph>
    </Link>
  );
};
