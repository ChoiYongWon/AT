import { GetATData } from "@/app/_common/query/get/useGetAT";
import { atom, selector } from "recoil";

export const loadingState = atom({
    key: "/at/loading",
    default: false
})

export const atDataState = atom<GetATData>({
    key: "/at/data",
    default: {
        id: '',
        title: '',
        address: '',
        categories: [],
        map: {
            id: '',
            name: '',
        },
        user: {
            id: '',
            at_id: '',
        },
        images: [],
        body: '',
        created_at: '',
        view_count: 0
    }
})

export const atDataSelector = selector<GetATData>({
    key: '/at/data_selector',
    get: ({get}) => {
        const at = get(atDataState)
        const date = new Date(at.created_at)
        const result = {
            ...at,
            created_at: `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}.`
        }
        return result
    }
})