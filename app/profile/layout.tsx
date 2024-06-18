'use client'

import { GridLayoutStyle } from "./style.css";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div key="/profile" className={GridLayoutStyle}>
      {children}
    </div>
  );
}
