import { GetATData } from "@/app/_common/query/get/useGetAT";
import { atom } from "recoil";

export const loadingState = atom({
    key: "at_loading",
    default: false
})

export const atDataState = atom<GetATData>({
    key: "at_data",
    default: {
        title: '',
        address: '',
        categories: [],
        map: {
            name: '',
        },
        user: {
            at_id: '',
        },
        images: [],
        body: '',
        created_at: '',
        view_count: 0
    }
})