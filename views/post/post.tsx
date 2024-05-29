"use client";

import ContentfulImage from "@/lib/contentful-image";
import { Post as PostType } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import { Heading } from "@/shared/ui/heading";
import { Section } from "@/shared/ui/section";

interface Post {
  post: PostType;
}

export const Post = ({ post }: Post) => {
  console.log(JSON.stringify(post, null, 2));
  return (
    <Section>
      <Heading level={1}>{post.title}</Heading>
      {post.contentfulMetadata.tags.length > 0 && (
        <ul className="my-4 flex flex-wrap gap-4">
          {post.contentfulMetadata.tags.map((item) => (
            <li
              key={item?.name}
              className="relative inline-flex border-2 border-primary-foreground bg-white px-2 py-1 font-normal text-primary-foreground shadow-[-4px_4px_0px_0px] shadow-primary-foreground"
            >
              {item?.name}
            </li>
          ))}
        </ul>
      )}
      {post?.content?.json && <Markdown document={post?.content.json} />}
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
      {post?.video?.url && (
        <div className="relative w-1/2">
          <video className="absolute inset-0 object-cover" controls>
            <source src={post.video.url} type="video/mp4" />
          </video>
        </div>
      )}
    </Section>
  );
};
