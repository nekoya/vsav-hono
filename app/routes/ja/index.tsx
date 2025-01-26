import { CharacterImage } from "../../components/CharacterImage";
import { characters } from "../../domains/character";
import type { Meta } from "../../types";

export default function Top() {
  const beginners = import.meta.glob<{ frontmatter: Meta }>(
    "./beginner/*.mdx",
    {
      eager: true,
    },
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
      <h2 class="mt-4 text-xl">初心者攻略</h2>
      <p class="m-2 text-sm text-neutral-400">
        CPU戦クリアからオンライン対戦あるいはゲーセンデビューぐらいを目標にした内容です。
      </p>
      <ul class="ml-2 mt-3">
        {Object.entries(beginners).map(([id, module]) => {
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
      <h2 class="mt-8 text-xl">対戦攻略</h2>
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
      <h2 class="mt-8 text-xl">テクニック</h2>
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
      <h2 class="mt-8 text-xl">データ</h2>
      <ul class="ml-2 mt-4">
        <li class="mt-2">
          <a href="./statistics/hitBox" class="text-indigo-300 underline">
            各キャラの当たり判定
          </a>
        </li>
      </ul>
      <h2 class="mt-8 text-xl">キャラクター紹介</h2>
      <ul class="mt-2 flex max-w-3xl flex-wrap">
        {characters.map((v) => {
          return (
            <li class="ml-2 mt-2 min-w-32 flex-1">
              <a
                href={`./characters/${v.id}`}
                class="flex items-center gap-2 text-indigo-300 underline"
              >
                <CharacterImage name={v.id} />
                {v.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
