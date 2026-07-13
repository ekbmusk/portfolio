import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const SITE_URL = "https://bekarys.me";
const FULL_NAME = "Bekarys Tuleutayev";
const TITLE = `${FULL_NAME} — ML/LLM Engineer, Robotics, Web3`;
const DESCRIPTION =
  "Bekarys Tuleutayev (bekarysdotme) — ML/LLM engineer, robotics, drones, web3. Winner of Google Build with AI 2024, two-time Astana Tech Cup champion, Decentrathon 5 prize winner.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: "bekarysdotme",
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  keywords: [
    "Bekarys",
    "Bekarys Tuleutayev",
    "bekarysdotme",
    "ML engineer",
    "LLM engineer",
    "robotics",
    "drones",
    "web3",
    "Solana",
    "Kazakhstan",
    "Astana Tech Cup",
    "Google Build with AI",
    "zhasyl.kz",
    "stemedu.kz",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/",
      kk: "/",
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "bekarysdotme",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Bekarys",
    lastName: "Tuleutayev",
    username: "bekarysdotme",
    locale: "en_US",
    alternateLocale: ["ru_RU", "kk_KZ"],
    images: [
      {
        url: "/bekarys-me.png",
        width: 1200,
        height: 630,
        alt: FULL_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/bekarys-me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  alternateName: ["bekarysdotme", "Bekarys", "callmebekaa"],
  url: SITE_URL,
  image: `${SITE_URL}/bekarys-me.png`,
  jobTitle: "ML/LLM Engineer, Robotics, Web3",
  description: DESCRIPTION,
  nationality: { "@type": "Country", name: "Kazakhstan" },
  knowsAbout: [
    "Machine Learning",
    "Large Language Models",
    "Robotics",
    "Drones",
    "Solana",
    "Web3",
    "IoT",
    "Physics",
    "Web Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "International Kazakh-Turkish University",
  },
  sameAs: [
    "https://github.com/ekbmusk",
    "https://t.me/bekarysdotme",
    "https://linkedin.com/in/bekarysdotme",
    "https://instagram.com/bekarysdotme",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
