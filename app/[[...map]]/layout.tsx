import { auth } from "@/auth";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import SearchBar from "./component/SearchBar";
import { GridLayoutStyle, SearchBarLayoutStyle } from "./style.css";
// import { TmpLayout } from "./style.css";
// import { GridLayoutStyle } from "./style.css";

export default async function Layout({ params, children }: { params: { map: string[] },  children: React.ReactNode}) {
    const session = await auth()
    const [at_id, name] = params.map || []
    let title = "전국 통합 지도"

    // 왜인지 모르겠는데 router.push로 돌아올때 at_id가 index로 나옴
    if(at_id && at_id !== 'index'){
        title = `${at_id} 전국${decodeURI(name || "")}지도`
    }

    return (
        <PageAnimateOpacity key="/" className={GridLayoutStyle}>
            <SearchBar image={session?.user.image} title={title} className={SearchBarLayoutStyle}/>
            {children}
        </PageAnimateOpacity>
    );
}
