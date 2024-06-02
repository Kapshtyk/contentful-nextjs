/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { useEffect } from "react";
import { inView, motion, useAnimate } from "framer-motion";

import ContentfulImage from "@/lib/contentful-image";
import { Post as PostType } from "@/lib/graphql/generate/graphql";
import { Markdown } from "@/lib/markdown";

import Logo from "@/shared/icons/logo.svg";
import { Heading } from "@/shared/ui/heading";
import { Paragraph } from "@/shared/ui/paragraph";
import { Section } from "@/shared/ui/section";

interface Post {
  post: PostType;
}

function useAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    inView(".tags", ({ target }) => {
      void animate(
        target,
        { x: [300, 0], opacity: [0, 1] },
        { type: "tween", duration: 0.3 },
      );
    });
    inView("video", ({ target }) => {
      void animate(
        target,
        { x: [300, 0], opacity: [0, 1] },
        { type: "tween", duration: 0.3 },
      );
    });
  }, [animate]);

  return scope;
}

export const Post = ({ post }: Post) => {
  const scope = useAnimation();

  return (
    <>
      <Section>
        {post?.coverImage?.url && post.coverImage.width && (
          <motion.div
            className="mb-4 w-screen self-center"
            initial={{ opacity: 0, x: -10 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ContentfulImage
              src={post.coverImage.url}
              width={post.coverImage.width}
              height={post.coverImage.height}
              alt={post.title}
              title={post.title}
            />
          </motion.div>
        )}
        <Heading level={1} styledAs={2}>
          {post.title}
        </Heading>
        <div className="relative mb-4 flex flex-col items-start gap-6 lg:flex-row">
          <div className="w-full max-w-3xl">
            {post?.content?.json && <Markdown document={post?.content.json} />}
          </div>
          {post.contentfulMetadata.tags.length > 0 && (
            <div ref={scope} className="w-full">
              <ul className="tags flex flex-wrap gap-4 lg:grid lg:grid-cols-1 lg:justify-items-start xl:grid-cols-2 xl:justify-items-stretch 2xl:grid-cols-3">
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
            <Paragraph className="mt-4">{post.video.description}</Paragraph>
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
