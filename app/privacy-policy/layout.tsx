import PageAnimateRight from "../_common/provider/PageAnimate/PageAnimateRight";
import { GridLayoutStyle } from "./style.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={GridLayoutStyle}>
      {children}
    </div>
  );
}
