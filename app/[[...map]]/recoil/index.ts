import { getATListResponseDTO } from "@/app/_common/query/get/useInfiniteATLists";
import { atom, selector } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type AT = {
    primary_address: string,
    _count: {
        primary_address: number
    }
}

export type Area = 
"서울특별시"
  | "인천광역시"
  | "경기도" 
  | "강원특별자치도" 
  | "충청남도" 
  | "대전광역시" 
  | "세종특별자치시" 
  | "충청북도" 
  | "경상북도" 
  | "대구광역시" 
  | "광주광역시" 
  | "전라남도" 
  | "전북특별자치도" 
  | "경상남도" 
  | "울산광역시" 
  | "부산광역시" 
  | "제주특별자치도"

export const areaName: any = {
    "서울특별시": "서울",
    "인천광역시": "인천",
    "경기도": "경기",
    "강원특별자치도": "강원",
    "충청남도": "충남",
    "대전광역시": "대전",
    "세종특별자치시": "세종",
    "충청북도": "충북",
    "경상북도": "경북",
    "대구광역시": "대구",
    "광주광역시": "광주",
    "전라남도": "전남",
    "전북특별자치도": "전북",
    "경상남도": "경남",
    "울산광역시": "울산",
    "부산광역시": "부산",
    "제주특별자치도": "제주"
}

export const areaNameReverse: any = {
    "서울": "서울특별시",
    "인천": "인천광역시",
    "경기": "경기도",
    "강원": "강원특별자치도",
    "충남": "충청남도",
    "대전": "대전광역시",
    "세종": "세종특별자치시",
    "충북": "충청북도",
    "경북": "경상북도",
    "대구": "대구광역시",
    "광주": "광주광역시",
    "전남": "전라남도",
    "전북": "전북특별자치도",
    "경남": "경상남도",
    "울산": "울산광역시",
    "부산": "부산광역시",
    "제주": "제주특별자치도"
}

// // 선택한 지역을 저장하고 있는 상태
export const selectedAreaState = atom<Area | null>({
    key: 'selected_area',
    default: null
})

// 지역별 at count 정보를 담고있는 배열 (서버 respone 그대로), 사용은 atSelector로 사용
export const atCountState = atom<AT[]>({
    key: 'at', 
    default: []
});

// 입력한 쿼리 input들을 저장하는 상태
export const atQueryState = atom<string[]>({
    key: 'at_query', 
    default: []
});

// reactQuery가 의존하고 있는 상태 (이 상태에 따라 refetch함)
export const atQueryStageState = atom<string[]>({
    key: 'at_query_stage', 
    default: []
});

// at 검색 로딩 상태 저장 SearchBar에서 검색하고 Map에 표시하기 위함
export const atMapLoadingState = atom<boolean>({
    key:'at_map_loading',
    default: false
})

type ATUrlType = {
    name: string | null
    at_id: string | null
}

export const atUrlState = atom<ATUrlType>({
    key: "at_url",
    default: {
        name: null,
        at_id: null,
    }
})

export const atListState = atom<any>({
    key: "at_list",
    default: {}
})

export const atCountSelector = selector({
    key: 'at_selector',
    get: ({get}) => {
        const at = get(atCountState)
        const result = at.reduce((acc: any, cur)=> {
            const area = areaName[cur.primary_address]
            const count = cur._count.primary_address
            acc[area] = count
            return acc
        }, {})
        return result
    }
})

export const atListSelector = selector({
    key: 'at_list_selector',
    get: ({get}) => {
        const at: any = get(atListState)
        const result = {
            list : [],
            count: 0
        }

        if(at?.pages){
            const pages = at.pages

            result.list = pages.reduce((acc: any, cur: any)=>{
                const {data, message}: getATListResponseDTO = cur
                const spots = data.list.map((d:any)=>{
                    return  ({
                        id: d.id,
                        title: d.title,
                        address: d.address,
                        at_id: d.user.at_id,
                        map_name: d.map.name,
                        images: d.images.map((image:any)=>image.url),
                        categories: d.categories.map((category:any)=>category.name),
                    })
                })


                acc = [...acc, ...spots]
                return acc
            }, [])
            result.count = pages[0]?.data.count|| 0
    
    
            return result
        }
        return []
        
    }
})

