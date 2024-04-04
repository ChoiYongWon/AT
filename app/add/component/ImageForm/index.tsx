'use client'

import { useEffect, useState } from "react";
import PreviewImageList from "./PreviewImageList"
import PreviewImageItem from "./PreviewImageItem";
import { v4 as uuidv4 } from "uuid";
import { ImageType, imageState } from "@/app/add/recoil";
import { useRecoilState } from "recoil";

type Props = {
    style ?: any
}

const ImageForm = ({style}: Props) => {

    const [image, setImage] = useRecoilState(imageState);

    const removeImage = (removeImage: ImageType) => {
        const arr = [...image];
        const i = arr.findIndex((item)=>item.name == removeImage.name);
        if (i > -1) arr.splice(i, 1);
        setImage(arr);
    };


    const onImageUpload = async (e: any) => {
        const files: FileList = e.target.files
        let promise = []
        const images = []
        
        // 비동기 제어
        for(let i=0;i<files.length;i++){
            promise.push(
                new Promise<ImageType>(async (resolve, reject)=>{
                    const reader = new FileReader()
                    reader.onload = (e:any)=>{
                        resolve({
                             name: uuidv4(),
                             data: files[i], 
                             size: files[i].size,
                             type: files[i].type,
                             previewUrl: e.target.result, 
                             ext: files[i].type.split("/")[1]
                            })
                    }

                    reader.readAsDataURL(files[i])
                })
            )
        }


        // 이미지가 다 업로드 될때까지 대기
        Promise.all(promise).then((data: any[])=>{
            setImage([...image, ...data])

            // 변화 감지 x
            e.target.value = ''
        })
        
    }

    return  (
        <PreviewImageList image={image} setImage={setImage} onImageUpload={onImageUpload} style={style}>
            {image.map((item:ImageType) => 
                <PreviewImageItem
                key={item.name}
                image={item}
                removeImage={() => removeImage(item)}
                />
            )}
        </PreviewImageList>
    )


    

}

export default ImageForm