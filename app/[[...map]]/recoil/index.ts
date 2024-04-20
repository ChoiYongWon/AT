import { atom, selector } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type AT = {
    primary_address: string,
    _count: {
        primary_address: number
    }
}

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


export const atState = atom<AT[]>({
    key: 'at', 
    default: []
});

export const atQueryState = atom<string[]>({
    key: 'at_query', 
    default: []
});

export const atQueryStageState = atom<string[]>({
    key: 'at_query_stage', 
    default: []
});

export const atLoadingState = atom<boolean>({
    key:'at_loading',
    default: false
})

export const atSelector = selector({
    key: 'at_selector',
    get: ({get}) => {
        const at = get(atState)
        const result = at.reduce((acc: any, cur)=> {
            const area = areaName[cur.primary_address]
            const count = cur._count.primary_address
            acc[area] = count
            return acc
        }, {})
        return result
    }
})
