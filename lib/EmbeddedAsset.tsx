import { NodeRenderer } from "@contentful/rich-text-react-renderer";
import type { Asset } from "contentful";

export const renderEmbeddedAsset: NodeRenderer = (node) => {
  const asset = node.data.tagret;
  console.log(asset);
  if (asset) {
    return <EmbeddedAsset asset={asset} />;
  }
  return null;
};

export const EmbeddedAsset = ({
  asset,
}: {
  asset: Asset<"WITHOUT_UNRESOLVABLE_LINKS">;
}) => {
  console.log(asset);
  return null;
};
