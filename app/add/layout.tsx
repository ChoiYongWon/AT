import PageAnimateRight from "../provider/PageAnimate/PageAnimateRight";
import PageAnimateUp from "../provider/PageAnimate/PageAnimateUp";
import RecoilRootProvider from "../provider/RecoilRootProvider";
import { GridLayoutStyle, TmpLayout } from "./style.css";

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
