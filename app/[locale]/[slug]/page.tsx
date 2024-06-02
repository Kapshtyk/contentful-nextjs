import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { getPostBySlug, getSlugs } from "@/lib/api/posts";

import { Post } from "@/views/post";

export async function generateStaticParams() {
  return await getSlugs();
}

export async function generateMetadata({
  params: { slug, locale },
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

  const post = await getPostBySlug(slug, locale);
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const openGraph: OpenGraph = {};

  if (
    post.previewImage &&
    post.previewImage.url &&
    post.previewImage.width &&
    post.previewImage.height &&
    post.previewImage.title
  ) {
    openGraph.images = [
      {
        url: post.previewImage.url,
        width: post.previewImage.width,
        height: post.previewImage.height,
        alt: post.previewImage.title,
      },
    ];
  }
  if (post.title) {
    openGraph.title = post.title;
  }
  if (post.excerpt) {
    openGraph.description = post.excerpt;
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.contentfulMetadata.tags
      .filter((tag) => tag && tag.name)
      .map((tag) => tag?.name)
      .join(", "),
    openGraph,
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: "en" | "ru" };
}) {
  unstable_setRequestLocale(params.locale);
  const { isEnabled } = draftMode();
  const post = await getPostBySlug(params.slug, params.locale, isEnabled);
  if (!post) {
    return null;
  }
  return <Post post={post} />;
}

export const revalidate = 7200;
