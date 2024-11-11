import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import ThemeProvider from "@/context/theme";
import Navbar from "@/components/navigation/navbar";

const groteskSan = localFont({
  src: "./fonts/HostGroteskVF.ttf",
  variable: "--font-grotesk-sans",
  weight: "300 400 500 600 700 800",
});



export const metadata: Metadata = {
    title: "Dev Overflow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: "/images/site-logo.svg",
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${groteskSan.className} antialiased`}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}