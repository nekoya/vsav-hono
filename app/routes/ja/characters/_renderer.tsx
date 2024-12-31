import { jsxRenderer } from "hono/jsx-renderer";
import { getCharacterName } from "../../../domains/character";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const name = getCharacterName(frontmatter.name);
  return (
    <Layout title={`キャラクター紹介 ${name}`}>
      <hgroup>
        <h1 class="mt-4 flex items-center gap-2 text-xl">
          <img src={`/static/characters/${frontmatter.name}_lp.gif`} />
          {name}
        </h1>
        {frontmatter.tagline && (
          <p class="mt-2 text-sm text-zinc-200">{frontmatter.tagline}</p>
        )}
      </hgroup>
      <article class="mt-2">{children}</article>
    </Layout>
  );
});
