import { getFrontPage } from "@/lib/api/frontpage";
import { Markdown } from "@/lib/markdown";

import { Heading } from "@/shared/ui/heading";

export default async function Page() {
  const frontpage = await getFrontPage();

  // console.log(JSON.stringify(frontpage, null, 2));

  if (!frontpage) {
    return <div>Post not found</div>;
  }

  return (
    <section>
      <Heading level={1}>{frontpage.title}</Heading>
      {frontpage?.description?.json.content && (
        <div>
          <Markdown
            document={frontpage.description.json}
            links={frontpage.description.links}
          />
        </div>
      )}
      <h1>Pew pew</h1>
    </section>
  );
}
