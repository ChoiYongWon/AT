import { atom, selector } from "recoil";

export type ImageType = {
    name: string;
    ext: string;
    type: string;
    size: number;
    data: any;
    previewUrl: string;
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

export const mapState = atom<Map>({
    key: '/add/map', 
    default: {id: null, name: null} 
});

export const imageState = atom<ImageType[]>({
    key: '/add/image', 
    default: [], 
});

export const categoryState = atom<Category[]>({
    key: '/add/category', 
    default: [], 
});

export const addressState = atom<Address>({
    key: '/add/address', 
    default: {enable: false, name: "", address: ""}, 
});

export const detailState = atom<string>({
    key: '/add/detail', 
    default: "", 
});


// type FormSelector = {
//     image: {
//         name: string;
//         data: any;
//         ext: string;
//     }[];
//     category: string[];
//     address: {
//         name: string;
//         address: string;
//     };
//     detail: string;
// }

export const formSelector = selector({
    key: '/add/form',
    get: ({get}) => {
        const map = get(mapState)
        const image = get(imageState)
        const category = get(categoryState)
        const address = get(addressState)
        const detail = get(detailState)

        const result = {
            map: {id: map.id, name: map.name},
            image: image.map((item: ImageType)=>({name: item.name, data: item.data, ext: item.ext, size: item.size})),
            category: category.map((item: Category)=>item.name),
            address: {name: address.name, address: address.address},
            detail
        }

        return result
    }
})

export const imageMapSelector = selector({
    key: '/add/imageMap',
    get: ({get}) => {
        const image = get(imageState)
        const result:any = {}
        image.forEach((item: ImageType)=>result[`${item.name}.${item.ext}`] = item)
        return result
    }
})
