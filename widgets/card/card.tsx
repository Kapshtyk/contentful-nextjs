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
      className="group relative mt-40 flex flex-col gap-4 bg-card p-4 shadow-[-8px_8px_0px_0px] shadow-primary-foreground"
    >
      {post?.previewImage?.url && post.previewImage?.width && (
        <div
          style={{
            aspectRatio: `${post.previewImage.width} / ${post.previewImage.height}`,
          }}
          className="relative -mt-44 w-full overflow-hidden"
        >
          <ContentfulImage
            src={post.previewImage.url}
            fill={true}
            className="object-cover"
            alt={post.title}
          />
        </div>
      )}
      <Paragraph className="font-normal">{post.excerpt}</Paragraph>
    </Link>
  );
};
