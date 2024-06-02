import Link from "next/link";
import { ReactNode } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import clsx from "clsx";

import { FrontpageDescriptionLinks } from "./graphql/generate/graphql";

import { Blockquote } from "@/shared/ui/blockquote";
import { Heading } from "@/shared/ui/heading";
import { Paragraph } from "@/shared/ui/paragraph";

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
        <Heading inversed={inversed} level={1} className={className}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Heading inversed={inversed} level={2} className={className}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Heading inversed={inversed} level={3} className={className}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <Heading inversed={inversed} level={4} className={className}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <Heading inversed={inversed} level={5} className={className}>
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <Paragraph className={className}>{children}</Paragraph>
      ),
      [BLOCKS.QUOTE]: (_node, children) => (
        <Blockquote inversed={inversed}>{children}</Blockquote>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          className={clsx(
            "font-normal text-primary transition-all duration-75",
            className,
          )}
          target="_blank"
          rel="noopener noreferrer"
          href={node.data.uri}
        >
          {children}
        </Link>
      ),
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
