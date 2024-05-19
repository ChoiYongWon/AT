import { useEffect } from "react";

type Props = {
    onPopState?: any
}

export const useGhostHistory = () => {

    const push = (url: string) => {
        // ghost stack 하나 쌓기
        window.history.pushState(null, "", `/${url}`)
    }

    function use({onPopState}: Props){

        const handlePopState = (e:any) => {
            // 뒤로가기 시 호출
            if(onPopState) onPopState()
        }

        useEffect(() => {

            // 브라우저 history에 stack 하나 쌓기 (뒤로가기 눌렀을때 이 스택이 사라짐)
            window.addEventListener("popstate", handlePopState);
            return (() => {
              window.removeEventListener("popstate", handlePopState);
            });
        }, []);
    }

    

    return { push, use }
}

