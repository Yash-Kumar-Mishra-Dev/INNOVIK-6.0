import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RakshaSetu — National Disaster Preparedness Platform",
  description: "Official ISRO Bhuvan-integrated Geoportal & Emergency Response Platform for India.",
};

import ClientInteractions from "./ClientInteractions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientInteractions />
        {children}
      </body>
    </html>
  );
}
