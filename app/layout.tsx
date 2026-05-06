import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/shared/ui/Navigation";
import { Footer } from "@/shared/ui/Footer";
import { GSAPRefresh } from "@/shared/ui/GSAPRefresh";
import { Suspense } from "react";

import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deutsch Lernen",
  description:
    "Deutsche Sprache lernen - Vokabeln, Grammatik, Prüfungsvorbereitung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="no-js">
      <body className={`${poppins.variable} antialiased`}>
        <Script
          id="remove-no-js"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');`,
          }}
        />
        <Suspense fallback={null}>
          <GSAPRefresh />
        </Suspense>
        <div className="container mx-auto max-w-7xl">
          <Navigation />
          <div className="px-2 mobile:px-8">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
