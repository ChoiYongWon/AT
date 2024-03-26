import PageAnimate from "../Provider/PageAnimate";
import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function OnBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageAnimate className={TmpLayout}>{children}</PageAnimate>;
  // return <div className={GridLayoutStyle}>{children}</div>;
}
