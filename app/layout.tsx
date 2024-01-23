import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Header from '@/components/layout/Header'
import '@/css/Layout.css'

export const metadata: Metadata = {
  title: "sai solution",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='background'>
        <Header/>
        {children}
      </body>
    </html>
  );
}
