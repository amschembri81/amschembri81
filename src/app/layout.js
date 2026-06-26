import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.amandamorrison.dev"),
  title: {
    default: "Amanda Morrison | Implementation & Customer Success",
    template: "%s | Amanda Morrison",
  },
  description:
    "Former K-12 educator turned SaaS implementation manager. Portfolio of automation projects, technical skills, and resume.",
  openGraph: {
    title: "Amanda Morrison | Implementation & Customer Success",
    description:
      "Former K-12 educator turned SaaS implementation manager. Portfolio of automation projects, technical skills, and resume.",
    url: "https://www.amandamorrison.dev",
    siteName: "Amanda Morrison",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amanda Morrison — Implementation & Customer Success",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Morrison | Implementation & Customer Success",
    description:
      "Former K-12 educator turned SaaS implementation manager. Portfolio of automation projects, technical skills, and resume.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}