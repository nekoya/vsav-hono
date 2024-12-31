export const names = new Map([
  ["anakaris", "アナカリス"],
  ["aulbath", "オルバス"],
  ["bishamon", "ビシャモン"],
  ["bulleta", "バレッタ"],
  ["demitri", "デミトリ"],
  ["felicia", "フェリシア"],
  ["gallon", "ガロン"],
  ["jedah", "ジェダ"],
  ["leilei", "レイレイ"],
  ["lilith", "リリス"],
  ["morrigan", "モリガン"],
  ["q-bee", "Q-Bee"],
  ["sasquatch", "サスカッチ"],
  ["victor", "ビクトル"],
  ["zabel", "ザベル"],
]);

export function getCharacterName(key: string): string {
  return names.get(key) ?? "";
}
