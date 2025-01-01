import { Style } from "hono/css";
import { html } from "hono/html";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ?? "vsav"}</title>
        <link rel="icon" href="/favicon.ico" />
        {import.meta.env.PROD ? (
          <>
            {html` <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-05M80V8H8X"
              ></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag("js", new Date());
                gtag("config", "G-05M80V8H8X");
              </script>`}
            <link rel="stylesheet" href="/static/assets/style.css" />
          </>
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
        <Script src="/app/client.ts" async />
        <Style />
      </head>
      <body class="bg-zinc-950 p-4 text-zinc-50">
        <header>
          <h1 class="text-3xl font-bold text-rose-700">
            <a href="/">vsav.nekoya.dev</a>
          </h1>
        </header>
        {children}
        <footer class="mt-8 text-center text-sm text-zinc-400">
          <p>- vsav.nekoya.dev -</p>
        </footer>
      </body>
    </html>
  );
});
