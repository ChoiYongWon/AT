import { GridLayoutStyle, TmpLayout } from "./style.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={TmpLayout}>{children}</div>;
  // return <div className={GridLayoutStyle}>{children}</div>;
}
