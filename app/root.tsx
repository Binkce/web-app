// Copyright 2025 Binkce. All rights reserved.

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import "./styles/global.css";
import Header from "~/components/header/Header";

// Root component of the Remix application.
export default function Root() {
    /* This component defines the overall HTML structure of the application.
     * It sets up the main layout and integrates the essential Remix
     * components required for rendering, routing, and the interactive
     * features of the application.
     */
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
