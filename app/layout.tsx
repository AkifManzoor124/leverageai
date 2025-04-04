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
  title: 'Job Autopilot – Automate Your Job Applications with AI',
  description: 'AI-powered platform to tailor your resumes, auto-apply to jobs, and track everything — so you can land interviews faster.',
  openGraph: {
    title: 'Job Autopilot – Automate Your Job Applications with AI',
    description: 'AI-powered resume tailoring, auto-apply, and job tracking — all in one tool.',
    url: 'https://your-deployed-domain.com',
    siteName: 'Job Autopilot',
    images: [
      {
        url: 'https://your-deployed-domain.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Autopilot',
    description: 'Automate your job search with AI.',
    images: ['https://your-deployed-domain.com/og-image.png'],
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
