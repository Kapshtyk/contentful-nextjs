import Link from "next/link";
import { ReactNode } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";

import { FrontpageDescriptionLinks } from "./graphql/generate/graphql";

import { Blockquote } from "@/shared/ui/blockquote";
import { Heading } from "@/shared/ui/heading";
import { ListItem } from "@/shared/ui/list-item";
import { Paragraph } from "@/shared/ui/paragraph";
import { UnorderedList } from "@/shared/ui/unordered-list";

type RichTextProps = {
  document: Document;
  links?: FrontpageDescriptionLinks;
  className?: string;
  inversed?: boolean;
};

export function Markdown({
  document,
  links,
  className,
  inversed = false,
}: RichTextProps): ReactNode {
  const _assetBlockMap = new Map(
    links?.assets?.block?.map((asset) => [asset?.sys.id, asset]),
  );

  const entryMap = new Map();
  if (links?.entries?.block) {
    for (const entry of links.entries.block ?? []) {
      entryMap.set(entry?.sys.id, entry);
    }
  }

  if (links?.entries?.inline) {
    for (const entry of links.entries.inline ?? []) {
      entryMap.set(entry?.sys.id, entry);
    }
  }

  if (links?.entries?.hyperlink) {
    for (const entry of links.entries.hyperlink ?? []) {
      entryMap.set(entry?.sys.id, entry);
    }
  }

  return documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Heading inversed={inversed} level={1}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Heading inversed={inversed} level={2}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Heading inversed={inversed} level={3}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <Heading inversed={inversed} level={4}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <Heading inversed={inversed} level={5}>
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <Paragraph className={className}>{children}</Paragraph>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.QUOTE]: (_node, children) => (
        <Blockquote inversed={inversed}>{children}</Blockquote>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => <ListItem>{children}</ListItem>,
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const asset = entryMap.get(node.data.target.sys.id);
        if (!asset) {
          return null;
        }
        return <Link href={`/posts/${asset.slug}`}>{children}</Link>;
      },
    },
  });
}
