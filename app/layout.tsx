import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, {ReactNode} from "react";
import ThemeProvider from "@/context/theme";
import {Toaster} from "@/components/ui/toaster";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

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


const RootLayout = async ({ children }: { children: ReactNode }) => {
    const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
    <SessionProvider session={session}>
      <body
        className={`${groteskSan.className} antialiased`}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
      </ThemeProvider>
      <Toaster />
      </body>
    </SessionProvider>
    </html>
  );
}

export default RootLayout;
