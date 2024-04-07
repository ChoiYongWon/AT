import { SessionProvider } from "next-auth/react";

const AuthContext = ({ children }: { children: any }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
