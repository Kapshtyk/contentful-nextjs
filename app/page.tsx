import { getFrontPage } from "@/lib/api/frontpage";

export default async function Page() {
  const frontpage = await getFrontPage();

  if (!frontpage[0]) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-5">
      {frontpage[0].title}
      {frontpage[0].description?.json && (
        <div>
          <pre>{JSON.stringify(frontpage[0].description.json, null, 2)}</pre>
        </div>
      )}
      {/* {frontpage?.coverImage?.url && (
        <ContentfulImage src={frontpage.coverImage.url} />
      )} */}
    </div>
  );
}
