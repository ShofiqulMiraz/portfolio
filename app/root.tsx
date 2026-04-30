import type { LinksFunction } from "react-router";
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

import "./app.css";

export const links: LinksFunction = () => [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/favicon.svg" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-bg">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="min-h-screen antialiased">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    const message = isRouteErrorResponse(error)
        ? `${error.status} ${error.statusText}`
        : error instanceof Error
          ? error.message
          : "Something went wrong.";

    return (
        <main className="grid min-h-screen place-items-center px-6 text-center">
            <div>
                <p className="font-display text-6xl text-gradient">Oops</p>
                <p className="mt-4 text-text-muted">{message}</p>
            </div>
        </main>
    );
}
