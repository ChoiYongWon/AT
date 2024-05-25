import PageAnimateRight from "../_common/provider/PageAnimate/PageAnimateRight";
import { TmpLayout } from "./style.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateRight key="/rename" className={TmpLayout}>
      {children}
    </PageAnimateRight>
  );
  // return <div className={GridLayoutStyle}>{children}</div>;
}
