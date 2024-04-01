import Image from 'next/image'
import { ReactNode } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'

import { EmbeddedAsset, renderEmbeddedAsset } from './EmbeddedAsset'

type RichTextProps = {
  document: Document
}

export function Markdown({ document }: RichTextProps): ReactNode {
  return documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: renderEmbeddedAsset,
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1>{children}</h1>
      }
    }
  })
}
