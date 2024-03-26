import PageAnimateRight from "../provider/PageAnimate/PageAnimateRight";
import PageAnimateUp from "../provider/PageAnimate/PageAnimateUp";
import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function AddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateRight key="/add" className={GridLayoutStyle}>
      {children}
    </PageAnimateRight>
  );
}
