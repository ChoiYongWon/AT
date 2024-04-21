import { auth } from "@/auth";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import SearchBar from "./component/SearchBar";
import { GridLayoutStyle, QueryLayoutStyle, SearchBarLayoutStyle } from "./style.css";
import RecoilRootProvider from "../_common/provider/RecoilRootProvider";
import Query from "./component/Query";
// import { TmpLayout } from "./style.css";
// import { GridLayoutStyle } from "./style.css";

export default async function Layout({ params, children }: { params: { map: string[] },  children: React.ReactNode}) {
    const session = await auth()
    let [at_id, name]: any = params.map || []
    let title = "전국 통합 지도"
    
    // 리다이렉션시 index로 바뀜
    if(at_id == 'index') at_id = undefined

    // 왜인지 모르겠는데 router.push로 돌아올때 at_id가 index로 나옴
    if(at_id && at_id !== 'index'){
        title = `${decodeURI(at_id)}의 ${decodeURI(name || "")}지도`
    }

    return (
        <RecoilRootProvider>
            <div className={GridLayoutStyle}>
                <SearchBar name={name} at_id={at_id} image={session?.user.image} title={title} className={SearchBarLayoutStyle}/>
                <Query className={QueryLayoutStyle} style={{marginTop: '12px'}}/>
                {children}
            </div>
        </RecoilRootProvider>
       
    );
}
