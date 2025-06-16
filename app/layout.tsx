import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import AOSInit from "@/lib/AOSInit";
import GSAPProvider from "@/lib/GSAPProvider";

export const metadata: Metadata = {
  title: "Village Farms",
  description: "Revolutionizing Sustainable Farming.",
  icons: {
    icon: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <GSAPProvider>
          <AOSInit />
          <main>{children}</main>
          <ToastContainer />
        </GSAPProvider>
      </body>
    </html>
  );
}
