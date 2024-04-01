import { getSlugs } from "@/lib/graphql/posts"

export async function generateStaticParams() {
  const slugs = await getSlugs()
  console.log(slugs)
  return slugs.map((slug) => ({
    slug
  }))
}

export default async function PostPage({
  params
}: {
  params: { slug: string }
}) {
  return <div className="container mx-auto px-5"></div>
}
