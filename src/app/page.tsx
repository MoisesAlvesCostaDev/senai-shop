"use client";

import HomePage from "@/app/pages/Home/Home";

import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <HomePage></HomePage>
    </SessionProvider>
  );
}
