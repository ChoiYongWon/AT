import PageAnimate from "../provider/PageAnimate/PageAnimateOpacity";
import { TmpLayout } from "./style.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageAnimate key="/profile" className={TmpLayout}>
      {children}
    </PageAnimate>
  );
  // return <div className={GridLayoutStyle}>{children}</div>;
}
