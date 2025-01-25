export function CharacterImage(props: {
  name: string;
  color?: string;
  class?: string;
}) {
  const color = props.color ?? "lp";
  const basePath = "/static/characters/icons/";
  return (
    <img
      src={`${basePath}${props.name}_${color}.gif`}
      alt={props.name}
      class={props.class ?? ""}
    />
  );
}
