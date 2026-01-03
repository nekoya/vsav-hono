import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import remarkCharacterImage from "./app/remark/CharacterImage";

export default defineConfig(({ mode }) => {
  console.log(mode);
  if (mode === "client") {
    return {
      plugins: [tailwindcss()],
      build: {
        rollupOptions: {
          input: ["/app/style.css"],
          output: {
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  } else {
    return {
      plugins: [
        tailwindcss(),
        honox({ devServer: { adapter } }),
        mdx({
          jsxImportSource: "hono/jsx",
          remarkPlugins: [
            remarkFrontmatter,
            remarkMdxFrontmatter,
            remarkGfm,
            remarkCharacterImage,
          ],
        }),
        build(),
      ],
    };
  }
});
