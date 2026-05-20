import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/shared/constants";

// Load Inter for our high-readability body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Load Roboto for our premium engineered display font
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Javi Air Conditioning | 5.0 Star Honest A/C Repair & Air Quality",
  description: "Honest HVAC service with no sales speeches. Specializing in emergency repair and allergy-safe filtration. Serving Florida with 5-star reliability.",
  keywords: [
    "Air Conditioning Installation Florida",
    "HVAC Repair Miami FL",
    "Javi Air Conditioning",
    "Javier Lima HVAC",
    "Allergy Air Filtration Florida",
    "Central AC Maintenance",
    "Heat Pump Service"
  ],
  authors: [{ name: "Javier Lima" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Construct high-integrity LocalBusiness JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/HVACBusiness",
    "name": BUSINESS_INFO.name,
    "alternateName": "Javi Air HVAC",
    "telephone": "844-941-5284",
    "url": "https://javiair.com",
    "image": "https://picsum.photos/seed/javiair-banner/1200/630",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.principal
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": BUSINESS_INFO.address.region
      }
    ],
    "award": "5.0 Rated HVAC Specialist on Google",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": BUSINESS_INFO.rating.reviewsCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "Central Air Conditioning Installation",
      "HVAC Emergency Repair",
      "Preventative HVAC Maintenance Plans",
      "High Efficiency Air Filtration for Allergies",
      "Heat Pump Tune-ups"
    ],
    "description": "Honest HVAC service with no sales speeches. Specializing in emergency repair and allergy-safe filtration. Serving Florida with 5-star reliability.",
    "identifier": "CAC1821100"
  };

  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} h-full`}>
      <head>
        {/* Inject high-performance SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
