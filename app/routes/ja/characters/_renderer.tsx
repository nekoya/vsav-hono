import { jsxRenderer } from "hono/jsx-renderer";
import { BackButton } from "../../../components/BackButton";
import { ColorTable } from "../../../components/ColorTable";
import { getCharacterName } from "../../../domains/character";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const name = getCharacterName(frontmatter.name);
  return (
    <Layout title={`キャラクター紹介 ${name}`}>
      <hgroup>
        <h1 class="mt-4 flex items-center gap-2 text-3xl">
          <img src={`/static/characters/icons/${frontmatter.name}_lp.gif`} />
          {name}
        </h1>
        {frontmatter.tagline && (
          <p class="mt-2 text-sm text-zinc-200">{frontmatter.tagline}</p>
        )}
      </hgroup>
      <div class="mt-4">
        <ColorTable name={frontmatter.name} />
      </div>
      <article class="mt-2">{children}</article>
      <div class="my-8 text-center">
        <BackButton href="/ja/">トップに戻る</BackButton>
      </div>
    </Layout>
  );
});
