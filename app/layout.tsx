"use client";

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./global.css";
import "./theme/theme.css";
import AuthContext from "./component/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AT - A Spot Thur",
//   description: "나만의 지도를 만들어보세요!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthContext>{children}</AuthContext>
        </QueryClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
