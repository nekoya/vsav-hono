import type { Meta } from "../../types";

export default function Top() {
  const characters = import.meta.glob<{ frontmatter: Meta }>(
    "./characters/*.mdx",
    { eager: true },
  );
  const posts = import.meta.glob<{ frontmatter: Meta }>("./posts/*.mdx", {
    eager: true,
  });
  return (
    <div>
      <h2>キャラクター</h2>
      <ul class="article-list">
        {Object.entries(characters).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <a href={`${id.replace(/\.mdx$/, "")}`}>
                  {module.frontmatter.title}
                </a>
              </li>
            );
          }
        })}
      </ul>
      <h2>Posts</h2>
      <ul class="article-list">
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <a href={`${id.replace(/\.mdx$/, "")}`}>
                  {module.frontmatter.title}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
