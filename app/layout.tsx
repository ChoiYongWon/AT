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
import CheckTokenValidation from "./_common/provider/CheckTokenValidation";
import GoogleAnalytics from "./_common/component/GoogleAnalytics";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AT - A Spot Thur",
  description: "나만의 지도를 만들어보세요!",
  openGraph: {
    title: "AT - A Spot Thur",
    description: "나만의 지도를 만들어보세요!",
    images: "https://github.com/ChoiYongWon/AT/assets/33446738/4857e99c-0610-484d-a7a5-acc1311ef2a9",
    type: "website",
    url: "https://a-spot-thur.app/",
  },
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
      <GoogleAnalytics/>
      <body>
        <Toast/>
        <QueryProvider>
          <AuthContext>
            <CheckTokenValidation>
              <RecoilRootProvider>
                <AnimateProvider>
                  {children}
                </AnimateProvider>
              </RecoilRootProvider>
            </CheckTokenValidation>
            
          </AuthContext>
        </QueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
