import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://waitaa.com";

const title = "Waitaa";
const description =
  "Turn every table into a smart experience. Waitaa helps restaurants, hotels, lounges, and public spaces connect with customers through QR-based calling, ordering, and ads monetization.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `Waitaa - %s`,
  },
  description,
  applicationName: title,
  keywords: [
    "Waitaa",
    "QR code restaurant ordering system in Africa",
    "digital waiter calling system without hardware",
    "smart table service technology",
    "contactless ordering",
    "customer-to-staff communication platform",
    "restaurant QR menu",
    "restaurant ads monetization",
    "hospitality technology",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    siteName: title,
    url: siteUrl,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "https://s3-bucket.slantapp.io/public-assets/waitaa-bg-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Waitaa: smart customer interaction for modern businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://s3-bucket.slantapp.io/public-assets/waitaa-bg-meta.jpg"],
    site: "@waitaa_qr",
    creator: "@waitaa_qr",
  },
  icons: {
    icon: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
