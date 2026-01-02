// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { JsonLd, orgSchema, websiteSchema } from "./seo-schema";

export const metadata: Metadata = {
  title: "RootLabs Engineering — Prototype & Product Creators",
  description:
    "RootLabs Engineering builds real-world prototypes and products that combine mechanical, electrical, electronics, and computer science engineering. We help founders and innovators bring ideas to life.",
  keywords: [
    "engineering prototypes",
    "product development",
    "mechanical design",
    "electronics engineering",
    "electrical engineering",
    "IoT prototyping",
    "proof of concept development",
    "engineering consulting",
    "RootLabs",
  ],
  metadataBase: new URL("https://rootlabsengg.com"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "RootLabs Engineering — Prototype & Product Creators",
    description:
      "We turn ideas into working prototypes through mechanical, electrical, electronics and CS engineering.",
    url: "https://rootlabsengg.com",
    siteName: "RootLabs Engineering",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RootLabs Engineering — Prototype and Product Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RootLabs Engineering — Prototype & Product Creators",
    description: "We turn engineering ideas into working prototypes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-800 font-[Nunito]">
        {/* Structured data for SEO + AI search */}
        <JsonLd data={orgSchema()} />
        <JsonLd data={websiteSchema()} />

        {children}
      </body>
    </html>
  );
}
