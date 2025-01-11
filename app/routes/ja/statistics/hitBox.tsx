import { characters } from "../../../domains/character";
import { sortByKey } from "../../../domains/utils";

export const title = "各キャラの当たり判定";

export default function HitBox() {
  const stands = sortByKey(characters, "standingHeight", "desc");
  const crouching = sortByKey(characters, "crouchingHeight", "desc");
  return (
    <div>
      <p>
        白い+マーク（地面とキャラの中央を表してる？）を基準に、立ち・しゃがみ時の高さを計測しました。
      </p>
      <p>
        同じようにスクショしましたが、デミトリだけ少し横の位置がズレています。このキャラだけ背景もズレるので何かが起きてそうです。
      </p>
      <h2>数値の一覧</h2>
      <p>背の高い順に並べてます。</p>
      <div class="flex flex-wrap gap-4">
        <div>
          <p class="mb-2 mt-0">立ち</p>
          <HeightTable
            rows={stands.map((c) => ({
              id: c.id,
              name: c.name,
              height: c.standingHeight,
            }))}
          />
        </div>
        <div>
          <p class="mb-2 mt-0">しゃがみ</p>
          <HeightTable
            rows={crouching.map((c) => ({
              id: c.id,
              name: c.name,
              height: c.crouchingHeight,
            }))}
          />
        </div>
      </div>
      <h2>立ちポーズの判定</h2>
      <div class="mt-4 flex flex-wrap gap-4">
        {stands.map((character) => (
          <div class="max-w-[45%]">
            <div>
              {character.name} {character.standingHeight}px
            </div>
            <img
              src={`/static/characters/standing/${character.id}.jpg`}
              width="200"
            />
          </div>
        ))}
      </div>
      <h2>しゃがみポーズの判定</h2>
      <div class="mt-4 flex flex-wrap gap-4">
        {crouching.map((character) => (
          <div class="max-w-[45%]">
            <div>
              {character.name} {character.crouchingHeight}px
            </div>
            <img
              src={`/static/characters/crouching/${character.id}.jpg`}
              width="200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeightTable(props: {
  rows: { id: string; name: string; height: number }[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th class="whitespace-nowrap border border-zinc-500 bg-zinc-700 px-2 py-1 text-left font-normal">
            キャラ
          </th>
          <th class="whitespace-nowrap border border-zinc-500 bg-zinc-700 px-2 py-1 text-left font-normal">
            高さ
          </th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.id}>
            <td class="flex items-center gap-2 whitespace-nowrap border border-zinc-500 px-2 py-1 text-left">
              <img
                src={`/static/characters/icons/${row.id}_lp.gif`}
                class="m-0 h-8 w-8"
              />
              {row.name}
            </td>
            <td class="whitespace-nowrap border border-zinc-500 px-2 py-1 text-right">
              {row.height}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
