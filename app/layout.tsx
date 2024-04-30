import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import "./global.css";
import "./_common/theme/theme.css";
import AuthContext from "./_common/provider/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import QueryProvider from "./_common/provider/QueryProvider";
import AnimateProvider from "./_common/provider/AnimateProvider";
import RecoilRootProvider from "./_common/provider/RecoilRootProvider";
import Toast from "./_common/component/Toast";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AT - A Spot Thur",
  description: "나만의 지도를 만들어보세요!",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/icons/icon-192x192.png", sizes: "192x192" }
    // 추가 아이콘 정보
  ],
  other: {
    google: 'notranslate'
  }
};

export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  themeColor: "#f7f7f7",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toast/>
        <QueryProvider>
          <AuthContext>
            <RecoilRootProvider>
              <AnimateProvider>
                {children}
              </AnimateProvider>
            </RecoilRootProvider>
          </AuthContext>
        </QueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
