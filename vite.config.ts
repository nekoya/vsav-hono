import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  console.log(mode);
  if (mode === "client") {
    return {
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
        honox({ devServer: { adapter } }),
        mdx({
          jsxImportSource: "hono/jsx",
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
        build(),
      ],
    };
  }
});
