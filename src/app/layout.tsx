import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.breaktimeretail.com"),
  title: "Break Time Retail",
  description: "Taco Bell, Shipley Donuts, and Breaktime.",
  openGraph: {
    title: "Break Time Retail",
    description: "Taco Bell, Shipley Donuts, and Breaktime.",
    url: "https://www.breaktimeretail.com/",
    siteName: "Break Time Retail",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Break Time Retail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Break Time Retail",
    description: "Taco Bell, Shipley Donuts, and Breaktime.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/breaktime-logo1.jpg",
    shortcut: "/breaktime-logo1.jpg",
    apple: "/breaktime-logo1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
