import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MaskProvider } from "../app/context/MaskContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Masking Tool",
  description: "Designed and Developed by Gaurav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MaskProvider>{children}</MaskProvider>
        <footer className="text-center text-sm text-gray-200">
        Designed with ♥ by Gaurav
      </footer>
      </body>
    </html>
  );
}
