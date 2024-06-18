'use client'

import { GridLayoutStyle } from "./style.css";

export default function AddLayout({
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
