import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";



export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jasper Anders",
  description: "My Personal Website. Build by Me.",
  keyword: "portfolio, javascript, developer, full-stack developer",
  "og:image": "https://jasperanders.xyz/build/_assets/MeBW-ANV4H5UG.jpg",
  "og:url": "https://jasperanders.xyz",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
