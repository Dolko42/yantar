import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Yantar",
  description: "Grow with AI platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable} ${GeistMono.variable} bg-skin-light`}
      >
        <body>
          {children}
          <Toaster />
          <Footer />
        </body>
        <Script
          defer
          src="https://analytics.umami.yazero.io/script.js"
          data-website-id="89a939ae-29a4-47fb-8458-44632dd9b749"
        />
        <Script
          defer
          src="https://umami-s044kkk.yza.yazero.io/script.js"
          data-website-id="c54262f7-2cd8-46e8-b7a4-034b3255c82c"
        />
      </html>
    </ClerkProvider>
  );
}
