'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast/headless";

const CheckTokenValidation = ({ children }: { children: any }) => {

    const session = useSession()
    const pathname = usePathname()

    useEffect(() => {
        (async function f(){
            console.log("에러남", session)
            if (session?.data?.error === "RefreshAccessTokenError") {
                toast("토큰이 만료되었습니다. 다시 로그인해주세요")
                await signOut()
                //   signIn('kakao', {callbackUrl: "/"}); // Force sign in to hopefully resolve error
            }
        })()
        
      }, [session]);

    return <>{children}</>;
};

export default CheckTokenValidation;
