import { Metadata } from "next";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { getPostBySlug, getSlugs } from "@/lib/api/posts";

import { Post } from "@/views/post";

export async function generateStaticParams() {
  return await getSlugs();
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string; locale: "en" | "ru" };
}): Promise<Metadata> {
  if (!slug) {
    return {
      title: "Arseniiy Kapshtyk - Portfolio",
      description:
        "This is a portfolio of Arseniiy Kapshtyk - a fullstack developer",
    };
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.contentfulMetadata.tags
      .filter((tag) => tag && tag.name)
      .map((tag) => tag?.name)
      .join(", "),
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: "en" | "ru" };
}) {
  unstable_setRequestLocale(params.locale);
  const { isEnabled } = draftMode();
  const post = await getPostBySlug(params.slug, isEnabled, params.locale);
  if (!post) {
    return null;
  }
  return <Post post={post} />;
}

export const revalidate = 7200;
