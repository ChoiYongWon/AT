import PageAnimateOpacity from "../provider/PageAnimate/PageAnimateOpacity";
import { GridLayoutStyle } from "./style.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateOpacity key="/login" className={GridLayoutStyle}>
      {children}
    </PageAnimateOpacity>
  );
}
