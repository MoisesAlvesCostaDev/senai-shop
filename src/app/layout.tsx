import type { Metadata } from "next";
import { Roboto, Baloo_2 } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "Senai Shop",
  description: "Cursos do senai",
  icons: {
    icon: "/icon.ico", // Caminho para o favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${baloo.variable} antialiased`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
