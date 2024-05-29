"use client";

import ContentfulImage from "@/lib/contentful-image";
import { Post as PostType } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import Logo from "@/shared/icons/logo.svg";
import { Heading } from "@/shared/ui/heading";
import { Section } from "@/shared/ui/section";

interface Post {
  post: PostType;
}

export const Post = ({ post }: Post) => {
  return (
    <>
      <Section>
        {post?.coverImage?.url && post.coverImage.width && (
          <div className="w-screen self-center">
            <ContentfulImage
              src={post.coverImage.url}
              width={post.coverImage.width}
              height={post.coverImage.height}
              alt={post.title}
              title={post.title}
            />
          </div>
        )}
        <Heading level={1} styledAs={2}>
          {post.title}
        </Heading>
        <div className="relative mb-4 flex flex-col items-start gap-6 lg:flex-row">
          <div className="max-w-3xl">
            {post?.content?.json && <Markdown document={post?.content.json} />}
          </div>
          {post.contentfulMetadata.tags.length > 0 && (
            <div className="w-full mb-4">
              <ul className="flex flex-wrap gap-4 lg:grid lg:grid-cols-1 lg:justify-items-start xl:grid-cols-2 xl:justify-items-stretch">
                {post.contentfulMetadata.tags.map((item) => (
                  <li
                    key={item?.name}
                    className="relative inline-flex border-2 border-primary-foreground bg-white px-2 py-1 font-normal text-primary-foreground shadow-[-4px_4px_0px_0px] shadow-primary-foreground"
                  >
                    {item?.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Logo
            aria-hidden="true"
            className="absolute bottom-0 right-0 hidden w-36 text-primary lg:block"
          />
        </div>
        {post?.video?.url && (
          <div className="max-w-3xl">
            <video title={post.video.title || undefined} controls>
              <source src={post.video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </Section>
    </>
  );
};
