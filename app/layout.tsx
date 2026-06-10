import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pulsa Health — AI triage that gets you to the right care, faster",
    template: "%s — Pulsa Health",
  },
  description:
    "Pulsa Health uses AI triage to connect health seekers to verified nurses and clinicians in minutes. Built for Africa, scaling globally.",
  metadataBase: new URL("https://pulsahealth.co"),
  openGraph: {
    siteName: "Pulsa Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pulsahealth",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
