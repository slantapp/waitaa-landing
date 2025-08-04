import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";
import AOSInit from "@/lib/AOSInit";
import GSAPProvider from "@/lib/GSAPProvider";

export const metadata: Metadata = {
  title: "Waitaa",
  description: "Africa's Leading QR Restaurant Service Solution",
  icons: {
    icon: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
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
        <GSAPProvider>
          <AOSInit />
          <main>{children}</main>
          <ToastContainer />
        </GSAPProvider>
      </body>
    </html>
  );
}
