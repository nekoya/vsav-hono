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
      <h2 class="mt-4 text-xl">キャラクター</h2>
      <ul class="mt-2 flex flex-wrap">
        {Object.entries(characters).map(([id, module]) => {
          const name = /\/characters\/(.+)\.mdx/.exec(id)?.[1];
          if (module.frontmatter) {
            return (
              <li class="ml-2 mt-2 min-w-32 flex-1">
                <a
                  href={`${id.replace(/\.mdx$/, "")}`}
                  class="flex items-center gap-2 text-indigo-300 underline"
                >
                  <img
                    src={`/static/characters/${name}_lp.gif`}
                    class="h-8 w-8"
                  />
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
