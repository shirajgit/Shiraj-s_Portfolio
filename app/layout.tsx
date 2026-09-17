import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.title,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    // opengraph-image.tsx is picked up automatically.
  },
   verification: {
    google: "NITnOs7yjovdQZveJybWa0201nQSpNeZ1cr8VWKwqSU",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  // 👇 Paste your Google Search Console token here when you verify the site.
  // verification: { google: "your-google-site-verification-token" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Structured data — helps Google understand "this page IS Shiraj Mujawar"
// and can power a rich person result / knowledge panel.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: [
        "Shiraj",
        "Shiraj Mujawar Developer",
        "Shiraj Mujawar Full-Stack Engineer",
      ],
      url: siteConfig.url,
      image: `${siteConfig.url}/profile.jpeg`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      email: `mailto:${siteConfig.links.email}`,
      nationality: "Indian",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: siteConfig.currentEmployer.name,
        url: siteConfig.currentEmployer.url,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Full-Stack Engineer & Product Builder",
        occupationalCategory: "15-1252.00", // Software Developers (O*NET)
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "TypeScript",
          "Shopify",
          "REST APIs",
          "Automation",
          "UI/UX",
          "IoT",
        ],
      },
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.instagram,
        siteConfig.foundedCompany.url,
      ],
      knowsAbout: [
        "Full-Stack Development",
        "Product Development",
        "MERN Stack",
        "Next.js",
        "React",
        "Node.js",
        "Shopify",
        "E-commerce Development",
        "API Integrations",
        "Business Automation",
        "IoT",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#aishi`,
      name: siteConfig.foundedCompany.name,
      url: siteConfig.foundedCompany.url,
      description:
        "Aishi Technologies builds digital products and solutions — from web applications and e-commerce to automation and integrations.",
      founder: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: siteConfig.title,
      about: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/#breadcrumb`,
      itemListElement: [
        { name: "Home", url: siteConfig.url },
        { name: "About", url: `${siteConfig.url}/#about` },
        { name: "Skills", url: `${siteConfig.url}/#skills` },
        { name: "Projects", url: `${siteConfig.url}/#projects` },
        { name: "Client Projects", url: `${siteConfig.url}/#clients` },
        { name: "Experience", url: `${siteConfig.url}/#experience` },
        { name: "Contact", url: `${siteConfig.url}/#contact` },
      ].map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
