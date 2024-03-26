import PageAnimateRight from "../provider/PageAnimate/PageAnimateRight";
import { TmpLayout } from "./style.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimateRight key="/profile" className={TmpLayout}>
      {children}
    </PageAnimateRight>
  );
  // return <div className={GridLayoutStyle}>{children}</div>;
}
