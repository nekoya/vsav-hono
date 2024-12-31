import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  return (
    <Layout title={frontmatter.title}>
      <article class="mt-2">{children}</article>
    </Layout>
  );
});