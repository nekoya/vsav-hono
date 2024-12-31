import { getCharacterName } from "../../domains/character";
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
      <h2 class="mt-4 text-xl">キャラクター紹介</h2>
      <ul class="mt-2 flex max-w-3xl flex-wrap">
        {Object.entries(characters).map(([id, module]) => {
          if (module.frontmatter) {
            const name = module.frontmatter.name;
            return (
              <li class="ml-2 mt-2 min-w-32 flex-1">
                <a
                  href={`./characters/${name}`}
                  class="flex items-center gap-2 text-indigo-300 underline"
                >
                  <img
                    src={`/static/characters/${name}_lp.gif`}
                    class="h-8 w-8"
                  />
                  {getCharacterName(name)}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
