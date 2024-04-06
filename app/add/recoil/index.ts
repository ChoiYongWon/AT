import { atom, selector } from "recoil";
import { v4 as uuidv4 } from "uuid";

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

export const imageState = atom<ImageType[]>({
    key: 'image', 
    default: [], 
});

export const categoryState = atom<Category[]>({
    key: 'category', 
    default: [], 
});

export const addressState = atom<Address>({
    key: 'address', 
    default: {enable: false, name: "", address: ""}, 
});

export const detailState = atom<string>({
    key: 'detail', 
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
    key: 'form',
    get: ({get}) => {
        const image = get(imageState)
        const category = get(categoryState)
        const address = get(addressState)
        const detail = get(detailState)

        const result = {
            image: image.map((item: ImageType)=>({name: item.name, data: item.data, ext: item.ext, size: item.size})),
            category: category.map((item: Category)=>item.name),
            address: {name: address.name, address: address.address},
            detail
        }

        return result
    }
})

export const imageMapSelector = selector({
    key: 'imageMap',
    get: ({get}) => {
        const image = get(imageState)
        const result:any = {}
        image.forEach((item: ImageType)=>result[`${item.name}.${item.ext}`] = item)
        return result
    }
})
