import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

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
        </body>
        <Script
          defer
          src="https://analytics.umami.yazero.io/script.js"
          data-website-id="89a939ae-29a4-47fb-8458-44632dd9b749"
        />
      </html>
    </ClerkProvider>
  );
}
