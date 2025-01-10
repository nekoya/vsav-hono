type Character = {
  id: string;
  name: string;
  standingHeight: number;
  crouchingHeight: number;
};

export const characters: Character[] = [
  {
    id: "anakaris",
    name: "アナカリス",
    standingHeight: 118,
    crouchingHeight: 66,
  },
  { id: "aulbath", name: "オルバス", standingHeight: 81, crouchingHeight: 62 },
  {
    id: "bishamon",
    name: "ビシャモン",
    standingHeight: 97,
    crouchingHeight: 75,
  },
  { id: "bulleta", name: "バレッタ", standingHeight: 91, crouchingHeight: 55 },
  { id: "demitri", name: "デミトリ", standingHeight: 102, crouchingHeight: 63 },
  {
    id: "felicia",
    name: "フェリシア",
    standingHeight: 79,
    crouchingHeight: 59,
  },
  { id: "gallon", name: "ガロン", standingHeight: 81, crouchingHeight: 51 },
  { id: "jedah", name: "ジェダ", standingHeight: 115, crouchingHeight: 66 },
  { id: "leilei", name: "レイレイ", standingHeight: 81, crouchingHeight: 58 },
  { id: "lilith", name: "リリス", standingHeight: 90, crouchingHeight: 54 },
  { id: "morrigan", name: "モリガン", standingHeight: 90, crouchingHeight: 54 },
  { id: "q-bee", name: "Q-Bee", standingHeight: 93, crouchingHeight: 44 },
  {
    id: "sasquatch",
    name: "サスカッチ",
    standingHeight: 87,
    crouchingHeight: 59,
  },
  { id: "victor", name: "ビクトル", standingHeight: 114, crouchingHeight: 74 },
  { id: "zabel", name: "ザベル", standingHeight: 93, crouchingHeight: 59 },
];

export function getCharacterName(key: string): string {
  const character = characters.find((c) => c.id === key);
  return character?.name ?? "";
}
