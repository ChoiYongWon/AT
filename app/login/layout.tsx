import PageAnimateRight from "../provider/PageAnimate/PageAnimateRight";
import { GridLayoutStyle } from "./style.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateRight key="/login" className={GridLayoutStyle}>
      {children}
    </PageAnimateRight>
  );
}
