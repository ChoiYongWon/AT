'use client'

import PageAnimateRight from "../_common/provider/PageAnimate/PageAnimateRight";
import RecoilRootProvider from "../_common/provider/RecoilRootProvider";
import { GridLayoutStyle } from "./style.css";

export default function AddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRootProvider>
      <PageAnimateRight key="/add" className={GridLayoutStyle}>
        {children}
      </PageAnimateRight>
    </RecoilRootProvider>

  );
}
