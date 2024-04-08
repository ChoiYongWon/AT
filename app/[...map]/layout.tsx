import { TmpLayout } from "./style.css";

// TODO 레이아웃 그룹 어떻게 나눌지 고민

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={TmpLayout}>{children}</div>;
  // return <div className={GridLayoutStyle}>{children}</div>;
}
