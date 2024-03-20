import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./global.css";
import "./theme/theme.css";
import AuthContext from "./component/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AT - A Spot Thur",
  description: "나만의 지도를 만들어보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContext>{children}</AuthContext>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
