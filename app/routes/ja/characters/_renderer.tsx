import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";
import { CharacterImage } from "../../../components/CharacterImage";
import { ColorTable } from "../../../components/ColorTable";
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
    <Layout title={`キャラクター紹介 ${character.name}`}>
      <hgroup>
        <h1 class="mt-4 flex items-center gap-2 text-3xl">
          <CharacterImage name={character.id} />
          {character.name}
        </h1>
        {frontmatter.tagline && (
          <p class="mt-2 text-sm text-zinc-200">{frontmatter.tagline}</p>
        )}
      </hgroup>
      <div class="mt-4">
        <ColorTable name={character.id} />
      </div>
      <article class="mt-4">
        <h2>技の説明</h2>
        <ul>
          <li>
            <a href={`/ja/commands/${character.id}`}>コマンド一覧</a>
          </li>
        </ul>
      </article>
      <article class="mt-2">{children}</article>
      <div class="my-8 text-center">
        <BackButton href="/ja/">トップに戻る</BackButton>
      </div>
    </Layout>
  );
});
