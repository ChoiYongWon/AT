import { GridLayoutStyle } from "./style.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={GridLayoutStyle}>{children}</div>;
}
