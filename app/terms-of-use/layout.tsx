'use client'

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
