import { characters } from "../../../domains/character";
import { sortByKey } from "../../../domains/utils";
import ZoomImage from "../../../islands/zoomImage";

export default function HitBox() {
  return (
    <article>
      <h1 class="mt-4 text-3xl">各キャラの当たり判定</h1>
      <p>
        白い+マーク（地面とキャラの中央を表してる？）を基準に、立ち・しゃがみ時の高さを計測しました。
      </p>
      <p>
        同じようにスクショしましたが、デミトリだけ少し横の位置がズレています。このキャラだけ背景もズレるので何かが起きてそうです。
      </p>
      <h2>立ち</h2>
      <div class="mt-4 flex flex-wrap gap-4">
        {sortByKey(characters, "standingHeight", "desc").map((character) => (
          <div>
            <div>
              {character.name} {character.standingHeight}px
            </div>
            <ZoomImage
              src={`/static/characters/standing/${character.id}.jpg`}
            />
          </div>
        ))}
      </div>
      <h2>しゃがみ</h2>
      <div class="mt-4 flex flex-wrap gap-4">
        {sortByKey(characters, "crouchingHeight", "desc").map((character) => (
          <div>
            <div>
              {character.name} {character.crouchingHeight}px
            </div>
            <ZoomImage
              src={`/static/characters/crouching/${character.id}.jpg`}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
