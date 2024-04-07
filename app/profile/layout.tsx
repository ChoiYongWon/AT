import PageAnimateRight from "../_common/provider/PageAnimate/PageAnimateRight";
import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateRight key="/profile" className={GridLayoutStyle}>
      {children}
    </PageAnimateRight>
  );
  // return <div className={GridLayoutStyle}>{children}</div>;
}
