import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corroya's OC Universe",
  description: "A static editorial OC portfolio museum for Corroya."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
