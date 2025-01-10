const colors = ["lp", "mp", "hp", "lk", "mk", "hk", "pp", "kk"];
const colorLabel = new Map([
  ["lp", "小P"],
  ["mp", "中P"],
  ["hp", "大P"],
  ["lk", "小K"],
  ["mk", "中K"],
  ["hk", "大K"],
  ["pp", "PP"],
  ["kk", "KK"],
]);

export function ColorTable(props: { name: string }) {
  return (
    <table>
      <thead>
        <tr>
          {colors.map((color) => (
            <td key={color} class="text-center text-sm">
              {colorLabel.get(color)}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {colors.map((color) => (
            <td key={color} class="p-1.5">
              <img
                src={`/static/characters/icons/${props.name}_${color}.gif`}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
