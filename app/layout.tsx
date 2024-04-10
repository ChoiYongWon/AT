import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import "./global.css";
import "./_common/theme/theme.css";
import AuthContext from "./_common/provider/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import QueryProvider from "./_common/provider/QueryProvider";
import AnimateProvider from "./_common/provider/AnimateProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AT - A Spot Thur",
  description: "나만의 지도를 만들어보세요!",
  other: {
    google: 'notranslate'
  }
};

export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthContext>
            <AnimateProvider>{children}</AnimateProvider>
          </AuthContext>
        </QueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
