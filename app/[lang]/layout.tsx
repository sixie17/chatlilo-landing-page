import React from "react";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/globals.css";
import metadata from "../../metadata.json";

export { metadata };

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "fr" | "ar" }>;
}) {
  // Await the params Promise
  const { lang } = await params;

  // Set text direction for RTL languages like Arabic
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className="relative">
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}