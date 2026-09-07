import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Libre_Baskerville } from "next/font/google";
import "@/assets/css/globals.css";
import Nav from "@/components/Nav";
import { getProfile, getExperience, getSkills } from "@/lib/content";
import { LINKEDIN_URL } from "@/content/links";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});
const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

const SITE = "https://www.vknyvz.com";
const title = "Volkan Yavuz · Product-minded Engineering Leader";
const description =
  "Volkan Yavuz, product-minded engineering leader (Tech Lead / Engineering Manager) in Los Angeles. " +
  "Full-stack across PHP/Laravel, Vue and Node, plus AI/LLM systems that move real numbers.";

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: "%s · Volkan Yavuz" },
  description,
  keywords: [
    "Volkan Yavuz", "Tech Lead", "Engineering Manager", "Full-Stack Engineer",
    "Laravel", "Vue.js", "Node.js", "PHP", "AI", "LLM", "Los Angeles",
  ],
  authors: [{ name: "Volkan Yavuz", url: SITE }],
  creator: "Volkan Yavuz",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Volkan Yavuz",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [profile, experience, skills] = await Promise.all([
    getProfile(),
    getExperience(),
    getSkills(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.roles.join(" / "),
    url: profile.url,
    sameAs: [LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    worksFor: { "@type": "Organization", name: experience[0]?.company ?? "EPCVIP" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "City University of New York, Hunter College" },
    knowsAbout: skills.flatMap((s) => s.items),
  };

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body id="top" className="min-h-screen bg-paper font-sans text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
