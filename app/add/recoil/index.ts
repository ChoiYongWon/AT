import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type ImageType = {
    name: string;
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

