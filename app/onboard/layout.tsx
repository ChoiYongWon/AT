import PageAnimateOpacity from "../provider/PageAnimate/PageAnimateOpacity";
import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function OnBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateOpacity key="/onboard" className={TmpLayout}>
      {children}
    </PageAnimateOpacity>
  );
  // return <div className={GridLayoutStyle}>{children}</div>;
}
