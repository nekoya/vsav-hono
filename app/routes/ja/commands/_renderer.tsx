import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";
import { CharacterImage } from "../../../components/CharacterImage";
import { characters } from "../../../domains/character";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const c = useRequestContext();
  const path = c.req.path.split("/").pop();
  const character = characters.find((v) => v.id === path);
  if (character === undefined) {
    return (
      <Layout title="not found">
        <div>not found</div>
      </Layout>
    );
  }
  return (
    <Layout title={`コマンド一覧 ${character.name}`}>
      <h1 class="mt-4 flex items-center gap-2 text-3xl">
        <CharacterImage name={character.id} />
        {character.name}
      </h1>
      <article class="mt-2">
        <div class="my-4">
          <a href={`/ja/characters/${character.id}`}>
            &laquo; キャラ紹介に戻る
          </a>
        </div>
        {children}
      </article>
      <div class="my-8 text-center">
        <BackButton href={`/ja/characters/${character.id}`}>
          {character.name}のキャラ紹介へ
        </BackButton>
      </div>
      <div class="my-8 text-center">
        <BackButton href="/ja/">トップに戻る</BackButton>
      </div>
    </Layout>
  );
});
