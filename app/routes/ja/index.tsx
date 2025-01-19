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
  const techniques = import.meta.glob<{ frontmatter: Meta }>(
    "./techniques/*.mdx",
    {
      eager: true,
    },
  );
  return (
    <div>
      <p>ヴァンパイアセイヴァー攻略</p>
      <h2 class="mt-4 text-xl">対戦攻略</h2>
      <ul class="ml-2 mt-4">
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            const title = module.frontmatter.title;
            return (
              <li class="mt-2">
                <a
                  href={id.replace(/.mdx$/, "")}
                  class="text-indigo-300 underline"
                >
                  {title}
                </a>
              </li>
            );
          }
        })}
      </ul>
      <h2 class="mt-4 text-xl">テクニック</h2>
      <ul class="ml-2 mt-4">
        {Object.entries(techniques).map(([id, module]) => {
          if (module.frontmatter) {
            const title = module.frontmatter.title;
            return (
              <li class="mt-2">
                <a
                  href={id.replace(/.mdx$/, "")}
                  class="text-indigo-300 underline"
                >
                  {title}
                </a>
              </li>
            );
          }
        })}
      </ul>
      <h2 class="mt-4 text-xl">データ</h2>
      <ul class="ml-2 mt-4">
        <li class="mt-2">
          <a href="./statistics/hitBox" class="text-indigo-300 underline">
            各キャラの当たり判定
          </a>
        </li>
      </ul>
      <h2 class="mt-8 text-xl">キャラクター紹介</h2>
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
                    src={`/static/characters/icons/${name}_lp.gif`}
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
