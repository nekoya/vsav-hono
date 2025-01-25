import type { Image, Text } from "mdast";
import type { Node, Parent } from "unist";
import { visit } from "unist-util-visit";

export default function remarkCharacterImage() {
  return (tree: Node) => {
    visit(
      tree,
      "text",
      (node: Text, index: number | null, parent: Parent | null) => {
        if (!parent || index === null) return;

        const regex = /\[([^\]]+)\]/g; // Matches [name] format
        const matches = Array.from(node.value.matchAll(regex));

        if (matches.length > 0) {
          const newNodes: (Text | Image)[] = [];
          let lastIndex = 0;

          matches.forEach((match) => {
            const name = match[1]; // Extract the character name
            const imageUrl = `/static/characters/icons/${name}_lp.gif`; // Always use the "lp" color

            // Add the text before the match
            if (match.index! > lastIndex) {
              newNodes.push({
                type: "text",
                value: node.value.slice(lastIndex, match.index),
              });
            }

            // Add the image node
            newNodes.push({
              type: "image",
              url: imageUrl,
              title: null,
              alt: name, // Set the character name as alt text
            });

            lastIndex = match.index! + match[0].length;
          });

          // Add the remaining text after the last match
          if (lastIndex < node.value.length) {
            newNodes.push({
              type: "text",
              value: node.value.slice(lastIndex),
            });
          }

          // Replace the original node with the new nodes
          parent.children.splice(index, 1, ...newNodes);
        }
      },
    );
  };
}
