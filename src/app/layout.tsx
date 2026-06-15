import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "NX Sports Private Limited",
  description: "Built for Performance. Designed for Champions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Barlow:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
       
        {children}
        <Footer />
      </body>
    </html>
  );
}