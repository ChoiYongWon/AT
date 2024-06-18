'use client'

import { auth } from "@/auth";
import SearchBar from "./component/SearchBar";
import { GridLayoutStyle, QueryLayoutStyle, SearchBarLayoutStyle } from "./style.css";
import Query from "./component/Query";
import { redirect } from "next/navigation";

const shortenArea = [
    "서울", "인천", "경기", "강원", "충남", "대전", "세종", "충북", "경북", "대구", "광주", "전남", "전북", "경남", "울산", "부산", "제주"
]


export default async function Layout({ params, children }: { params: { map: string[] },  children: React.ReactNode}) {
    const session = await auth()
    let [at_id, name]: any = params.map || []
    let title = "전국 통합 지도"
    
    // 리다이렉션시 index로 바뀜
    if(at_id == 'index') at_id = undefined

    // 지역으로 리다이렉션시 홈으로
    if(shortenArea.includes(decodeURI(at_id))) redirect("/")

    // 왜인지 모르겠는데 router.push로 돌아올때 at_id가 index로 나옴
    if(at_id && at_id !== 'index'){
        title = `${decodeURI(at_id)}의 ${decodeURI(name || "")}지도`
    }

    return (
        // <RecoilRootProvider>
            <div className={GridLayoutStyle}>
                <SearchBar name={name} at_id={at_id} image={session?.user.image} title={title} className={SearchBarLayoutStyle}/>
                <Query className={QueryLayoutStyle} style={{marginTop: '12px'}}/>
                {children}
            </div>
        // </RecoilRootProvider>
       
    );
}
