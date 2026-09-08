import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./index.css";
import { clashGrotesk, clashDisplay } from "./fonts";
import JsonLd from "./_components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://luxaeonspaces.com"),

  title: {
    default: "Luxaeon Spaces | Interior Design Studio",
    template: "%s | Luxaeon Spaces",
  },

  description:
    "Luxaeon Spaces creates thoughtful, contemporary interiors designed around the way people live.",

  alternates: {
    canonical: "./",
  },

  keywords: [
    "Luxaeon Spaces",
    "interior design",
    "interior design studio",
    "interior designers Nigeria",
    "interior design Lagos",
    "residential interior design",
    "commercial interior design",
    "home interior design",
  ],

  authors: [
    {
      name: "Luxaeon Spaces",
    },
  ],

  creator: "Luxaeon Spaces",
  publisher: "Luxaeon Spaces",

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://luxaeonspaces.com",
    siteName: "Luxaeon Spaces",
    title: "Luxaeon Spaces | Interior Design Studio",
    description:
      "Thoughtful, contemporary interiors designed around the way people live.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxaeon Spaces Interior Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxaeon Spaces | Interior Design Studio",
    description:
      "Thoughtful, contemporary interiors designed around the way people live.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${clashGrotesk.variable} ${clashDisplay.variable}`}
    >
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "InteriorDesigner",
            name: "Luxaeon Spaces",
            url: "https://luxaeonspaces.com",
            description:
              "Luxaeon Spaces creates thoughtful, contemporary interiors designed around the way people live.",
            logo: "https://luxaeonspaces.com/logo.png",
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
