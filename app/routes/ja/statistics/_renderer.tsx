import { jsxRenderer } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";

export default jsxRenderer(({ children, Layout, title }) => {
  return (
    <Layout title={title}>
      <div>{children}</div>
      <div class="my-8 text-center">
        <BackButton href="/ja/">トップに戻る</BackButton>
      </div>
    </Layout>
  );
});
