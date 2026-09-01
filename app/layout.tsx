import type { Metadata } from "next";
import Script from "next/script";
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

  verification: {
    other: {
      "facebook-domain-verification": "XBCB",
    },
  },

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

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://sushiscale.com",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1747856426538196');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1747856426538196&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
