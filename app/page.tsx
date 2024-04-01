import ContentfulImage from '@/lib/contentful-image'
import { getPostBySlug } from '@/lib/graphql/posts'
import Image from 'next/image'


export default async function Page() {
  const frontpage = await getPostBySlug('post')

  if (!frontpage) {
    return <div>Post not found</div>
  }

  return (
    <div className="container mx-auto px-5">
      {frontpage.title}
      {frontpage.author?.name}
      {/* {frontpage?.coverImage?.url && (
        <ContentfulImage src={frontpage.coverImage.url} />
      )} */}
      <pre>{JSON.stringify(frontpage, null, 2)}</pre>
    </div>
  )
}
