import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/shared/ui/Navigation";
import { Footer } from "@/shared/ui/Footer";

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
    <html lang="de">
      <body className={`${poppins.variable} antialiased`}>
        <div className="container mx-auto max-inline-300">
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
