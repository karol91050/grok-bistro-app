import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartHydrator } from "@/components/layout/CartHydrator";
import appCss from "../styles.css?url";

const APP_NAME = "Rytro Catering";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Górskie smaki na zamówienie. Catering i bistro u stóp zamku w Rytrze — Beskid Sądecki.",
      },
      { name: "theme-color", content: "#3D2A1E" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <html lang="pl" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh bg-cream font-sans text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <CartHydrator />
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70svh] max-w-lg flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted">404</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Tej ścieżki nie ma na mapie</h1>
      <p className="mt-3 text-sm text-muted">
        Strona nie istnieje. Wróć do chaty — menu i zamek czekają.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-[var(--radius-md)] bg-ember px-6 text-xs uppercase tracking-[0.16em] text-paper no-underline"
      >
        Do strony głównej
      </a>
    </main>
  );
}
