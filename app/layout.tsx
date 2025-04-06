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
  title: 'Automate Your Job Applications with AI',
  description: 'Built to think, not blast. Jobtra applies like a human would — only faster.',
  openGraph: {
    title: 'Jobtra – Strategic Job Hunting, Automated',
    description: 'Built to think, not blast. Jobtra applies like a human would — only faster.',
    url: 'https://jobtra.ca/',
    siteName: 'JobTra',
    images: [
      {
        url: 'https://jobtra.ca/logo.png',
        width: 1200,
        height: 730,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Autopilot',
    description: 'Automate your job search with AI.',
    images: ['https://jobtra.ca/logo.png'],
  },
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
        {children}
      </body>
    </html>
  );
}
