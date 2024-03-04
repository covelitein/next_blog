import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { FetchConfig } from 'http-react'
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });

const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat-VariableFont_wght.woff2',
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <FetchConfig baseUrl="/api">
          <div>
            {children}
          </div>
        </FetchConfig>
        <Toaster />
      </body>
    </html>
  );
}
