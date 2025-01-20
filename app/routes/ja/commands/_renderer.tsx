import { jsxRenderer } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";
import { getCharacterName } from "../../../domains/character";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const name = getCharacterName(frontmatter.name);
  return (
    <Layout title={`コマンド一覧 ${name}`}>
      <h1 class="mt-4 flex items-center gap-2 text-3xl">
        <img src={`/static/characters/icons/${frontmatter.name}_lp.gif`} />
        {name}
      </h1>
      <article class="mt-2">
        <div class="my-4">
          <a href={`/ja/characters/${frontmatter.name}`}>
            &laquo; キャラ紹介に戻る
          </a>
        </div>
        {children}
      </article>
      <div class="my-8 text-center">
        <BackButton href={`/ja/characters/${frontmatter.name}`}>
          {name}のキャラ紹介へ
        </BackButton>
      </div>
      <div class="my-8 text-center">
        <BackButton href="/ja/">トップに戻る</BackButton>
      </div>
    </Layout>
  );
});
