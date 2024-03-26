import PageAnimate from "../Provider/PageAnimate";
import { TmpLayout } from "./style.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageAnimate className={TmpLayout}>{children}</PageAnimate>;
  // return <div className={GridLayoutStyle}>{children}</div>;
}
