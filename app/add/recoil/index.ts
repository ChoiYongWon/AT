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
    default: [
        {name: uuidv4(), data: null, previewUrl: "https://github.com/ChoiYongWon/AT/assets/40623433/645f8238-ea27-4b02-9d64-1916d69ca560"},
        {name: uuidv4(), data: null, previewUrl: "https://github.com/ChoiYongWon/AT/assets/40623433/2d9eaa62-43d3-4758-9b23-7743487a1412"},
        {name: uuidv4(), data: null, previewUrl: "https://github.com/ChoiYongWon/AT/assets/40623433/6cc779f2-e6f9-494c-b31d-12aa475152a6"}
    ], 
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

