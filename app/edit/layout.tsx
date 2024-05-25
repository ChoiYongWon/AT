import RecoilRootProvider from "../_common/provider/RecoilRootProvider";
import { GridLayoutStyle } from "./style.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRootProvider>
      <div className={GridLayoutStyle}>
        {children}
      </div>
    </RecoilRootProvider>

  );
}
