import { atom, selector } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type ImageType = {
    name: string;
    ext?: string;
    type?: string;
    size?: number;
    data?: any;
    previewUrl: string;
    isNew: boolean
}

export type Category = {
    name: string;
    id: string;
};

export type Address = {
    enable: boolean
    name: string;
    address: string;
};

export type Map = {
    id: string | null,
    name: string | null
};

export const idState = atom<string>({
    key: '/edit/id', 
    default: ''
});


export const mapState = atom<Map>({
    key: '/edit/map', 
    default: {id: null, name: null} 
});

export const imageState = atom<ImageType[]>({
    key: '/edit/image', 
    default: [], 
});

export const deletedImageState = atom<string[]>({
    key: '/edit/deletedImage', 
    default: [], 
});

export const categoryState = atom<Category[]>({
    key: '/edit/category', 
    default: [], 
});

export const addressState = atom<Address>({
    key: '/edit/address', 
    default: {enable: false, name: "", address: ""}, 
});

export const detailState = atom<string>({
    key: '/edit/detail', 
    default: "", 
});


type FormSelectorType = {
    id: string,
    image: { // data, ext, size는 원래 있는 사진은 필요없음 undefined
        name: string;
        data?: any;
        ext?: string;
        size?: number;
        isNew: boolean; // 새로 등록된 사진인지 아닌지 판별
    }[];
    map: Map,
    category: string[];
    address: {
        name: string;
        address: string;
    };
    detail: string;
    deletedImage: string[]; // 원래 있던 이미지중에서 지워진 이미지
}

export const formSelector = selector({
    key: '/edit/form',
    get: ({get}): FormSelectorType => {
        const id = get(idState)
        const map = get(mapState)
        const image = get(imageState)
        const deletedImage = get(deletedImageState)
        const category = get(categoryState)
        const address = get(addressState)
        const detail = get(detailState)

        const result: FormSelectorType = {
            id,
            map: {id: map.id, name: map.name},
            image: image.map((item: ImageType)=>({name: item.name, data: item.data, ext: item.ext, size: item.size, isNew: item.isNew})),
            category: category.map((item: Category)=>item.name),
            address: {name: address.name, address: address.address},
            detail,
            deletedImage
        }

        return result
    },
})

// 초기화 할때 기입하는 항목들
type InitialFormSelectorType = {
    id: string;
    map: Map;
    image: ImageType[];
    category: Category[];
    address: Address;
    detail: string;
    title: string;
}

// 처음 초기화 할때 사용
export const  editFormSelector = selector({
    key: '/edit/form/init',
    set: ({set}, newValue: InitialFormSelectorType | unknown) => {
        const { id, map, image, category, address, detail, title } = newValue as InitialFormSelectorType
        set(idState, id)
        set(mapState, map)
        set(imageState, image)
        set(categoryState, category)
        set(addressState, address)
        set(detailState, detail)
    },
    get: ({get}) => {

    }
})

export const imageMapSelector = selector({
    key: '/edit/imageMap',
    get: ({get}) => {
        const image = get(imageState)
        const result:any = {}
        image.forEach((item: ImageType)=>result[`${item.name}.${item.ext}`] = item)
        return result
    }
})
