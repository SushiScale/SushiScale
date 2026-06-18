import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SushiScale – White-Label Meta Ads & Funnels for Agencies",
  description:
    "We help agency owners create consistent leads for their clients using Meta Ads, GoHighLevel, high-converting funnels, and automated follow-up systems — starting at $270/month per client.",
  keywords: [
    "white label Meta Ads",
    "white label GoHighLevel",
    "agency fulfillment",
    "white label funnels",
    "Meta Ads for agencies",
    "GHL white label",
    "lead generation agency",
    "white label digital marketing",
  ],
  openGraph: {
    title: "SushiScale – White-Label Meta Ads & Funnels for Agencies",
    description:
      "Scale your agency without hiring. We handle Meta Ads, GHL, funnels, creatives, and tracking for your clients — starting at $270/month.",
    url: "https://sushiscale.com",
    siteName: "SushiScale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SushiScale – White-Label Meta Ads & Funnels for Agencies",
    description:
      "Scale your agency without hiring. We handle Meta Ads, GHL, funnels, creatives, and tracking for your clients.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sushiscale.com" },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}