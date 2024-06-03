import { getSlugs } from "@/lib/api/posts";

export default async function sitemap() {
  const sitemap = [
    {
      url: `${process.env.NEXT_PRODUCTION_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PRODUCTION_URL}/en`,
          ru: `${process.env.NEXT_PRODUCTION_URL}/ru`,
        },
      },
    },
  ];
  const slugs = await getSlugs();

  const posts = slugs.map(({ slug }) => ({
    url: `${process.env.NEXT_PRODUCTION_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${process.env.NEXT_PRODUCTION_URL}/en/${slug}`,
        ru: `${process.env.NEXT_PRODUCTION_URL}/ru/${slug}`,
      },
    },
  }));

  return [...sitemap, ...posts];
}
