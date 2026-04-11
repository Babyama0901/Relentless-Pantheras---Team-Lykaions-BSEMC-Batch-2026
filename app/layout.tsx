import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Yearbook Batch 2026 | Team Lykaions BSEMC",
  description: "Relentless Pantheras — A living digital memory for the Class of 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark selection:bg-[#6E00FF] selection:text-white">
      <body className="font-trap antialiased bg-black text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
