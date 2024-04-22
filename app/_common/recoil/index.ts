// 최상단 전역 상태

import { Area } from "@/app/[[...map]]/recoil";
import { atom } from "recoil";

// 선택한 지역을 저장하고 있는 상태 (페이지간 이동에도 상태 유지 목적)
export const selectedAreaState = atom<Area | null>({
    key: 'selected_area',
    default: null
})