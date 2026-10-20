import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { QueryProvider } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Boardly - Enterprise Project Management Platform",
    template: "%s | Boardly",
  },
  description:
    "The comprehensive project management solution designed for modern teams and organizations. Plan, track, and deliver work efficiently with workspaces, projects, tasks, kanban boards, and analytics.",
  keywords: [
    "project management",
    "team collaboration",
    "kanban board",
    "task management",
    "workspace",
    "agile",
    "scrum",
    "productivity",
    "team lead",
    "project tracking",
    "workflow management",
    "team analytics",
  ],
  authors: [{ name: "Ali Samir" }],
  creator: "Ali Samir",
  publisher: "Ali Samir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_APP_URL || "http://localhost:4200"
  ),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Boardly - Enterprise Project Management Platform",
    description:
      "The comprehensive project management solution designed for modern teams and organizations. Plan, track, and deliver work efficiently.",
    siteName: "Boardly",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Boardly - Enterprise Project Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boardly - Enterprise Project Management Platform",
    description:
      "The comprehensive project management solution designed for modern teams and organizations.",
    images: ["/og-image.png"],
    creator: "@alisamirali",
  },
  category: "productivity",
  classification: "Project Management Software",
  other: {
    "application-name": "Boardly",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Boardly",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#000000",
    "msapplication-tap-highlight": "no",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={cn(
          inter.className,
          "antialiased min-h-screen bg-background text-foreground"
        )}
      >
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
