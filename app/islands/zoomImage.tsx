import { useState } from "hono/jsx";

export default function ZoomImage(props: { src: string }) {
  const [zoom, setZoom] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setZoom(true);
        }}
      >
        <img src={props.src} width={200} />
      </button>
      {zoom === true && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/75"
          onClick={() => setZoom(false)}
        >
          <img src={props.src} className="max-h-full max-w-full" />
        </div>
      )}
    </div>
  );
}
