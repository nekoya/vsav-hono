import { jsxRenderer } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";

export default jsxRenderer(({ children, Layout, title }) => {
  return (
    <Layout title={title}>
      <h1 class="mt-4 text-3xl">{title}</h1>
      <article>{children}</article>
      <div class="my-8 text-center">
        <BackButton href="/ja/">トップに戻る</BackButton>
      </div>
    </Layout>
  );
});
