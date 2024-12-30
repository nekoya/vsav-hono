import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <article>{children}</article>
    </Layout>
  );
});
