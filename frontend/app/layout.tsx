import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lawyer of One - Your One-Person Legal Department",
  description: "AI-powered legal assistant with human attorney oversight for small businesses. Get contract reviews, compliance reminders, and plain-English legal explanations.",
  keywords: "legal assistant, small business lawyer, contract review, legal compliance, AI lawyer",
  authors: [{ name: "Utlyze" }],
  openGraph: {
    title: "Lawyer of One - Your One-Person Legal Department",
    description: "AI-powered legal assistant with human attorney oversight for small businesses",
    type: "website",
    url: "https://lawyerofone.com",
    siteName: "Lawyer of One",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Lawyer of One - Your One-Person Legal Department"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawyer of One - Your One-Person Legal Department",
    description: "AI-powered legal assistant with human attorney oversight for small businesses",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
