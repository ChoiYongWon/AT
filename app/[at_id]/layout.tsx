import { TmpLayout } from "./style.css";

export default function OnBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={TmpLayout}>{children}</div>;
  // return <div className={GridLayoutStyle}>{children}</div>;
}
