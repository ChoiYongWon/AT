import PageAnimateUp from "../provider/PageAnimate/PageAnimateUp";
import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function AddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateUp key="/add" className={GridLayoutStyle}>
      {children}
    </PageAnimateUp>
  );
}
