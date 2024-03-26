import PageAnimate from "../Provider/PageAnimate";
import { GridLayoutStyle } from "./style.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageAnimate className={GridLayoutStyle}>{children}</PageAnimate>;
}
