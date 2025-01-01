import type { Child } from "hono/jsx";

export function BackButton(props: { href: string; children: Child }) {
  return (
    <a href={props.href}>
      <button class="w-64 rounded-md bg-rose-900 p-2 text-sm tracking-widest">
        {props.children}
      </button>
    </a>
  );
}
