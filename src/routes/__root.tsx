import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import NebulaFlow from "@/components/lightswind/nebula-flow";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kaveesha Maharambage — Portfolio" },
      { name: "description", content: "Frontend Developer & UI/UX Designer based in Sri Lanka." },
      { name: "author", content: "Kaveesha Maharambage" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      {/* Global animated purple nebula background — fixed behind every route/section */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#12081f]">
        <NebulaFlow
          colors={["#12081f", "#4c1d95", "#86198f"]}
          speed={0.6}
          scale={1}
          density={0.8}
          interactive
        />
        {/* Dark tint so body text stays readable over the nebula swirls */}
        <div className="absolute inset-0 bg-[#0f071b]/65" />
      </div>

      <div className="relative z-10">
        <Outlet />
      </div>
    </>
  );
}
