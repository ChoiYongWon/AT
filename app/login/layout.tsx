import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import { GridLayoutStyle } from "./style.css";

export default function Layout({
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
