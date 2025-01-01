import { jsxRenderer } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  return (
    <Layout title={frontmatter.title}>
      <h1 class="mt-4 flex items-center gap-2 text-3xl">{frontmatter.title}</h1>
      <article class="mt-2">{children}</article>
      <div class="my-8 text-center">
        <BackButton href="/ja/">戻る</BackButton>
      </div>
    </Layout>
  );
});
