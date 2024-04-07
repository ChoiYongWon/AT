import PageAnimateRight from "../_common/provider/PageAnimate/PageAnimateRight";
import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function OnBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateRight key="/onboard" className={TmpLayout}>
      {children}
    </PageAnimateRight>
  );
  // return <div className={GridLayoutStyle}>{children}</div>;
}
