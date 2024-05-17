import { AdminLayoutStyle } from "./style.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={AdminLayoutStyle}>
      {children}
    </div>
  );
}
