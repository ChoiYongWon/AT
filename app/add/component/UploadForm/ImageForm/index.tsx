'use client'

import { useEffect, useState } from "react";
import PreviewImageList from "./PreviewImageList"
import PreviewImageItem from "./PreviewImageItem";
import { v4 as uuidv4 } from "uuid";
import { ImageType, imageState } from "@/app/add/recoil";
import { useRecoilState } from "recoil";
import imageCompression from 'browser-image-compression';

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

    // useEffect(()=>{
    //     return ()=>{
    //         //unmount 될때 메모리 누수 방지
    //         image.forEach((item)=> URL.revokeObjectURL(item.previewUrl))
    //     }
    //     // eslint-disable-next-line
    // }, [])

    const onImageUpload = async (e: any) => {
        const files = e.target.files
        let promise = []
        const images = []
        
        // 비동기 제어
        for(let i=0;i<files.length;i++){
            promise.push(
                new Promise(async (resolve, reject)=>{
                    const reader = new FileReader()
                    const resizingBlob = await imageCompression(files[i], { maxSizeMB: 0.1 });
                    const resizingFile = new File([resizingBlob], files[i].name, { type: files[i].type });
                    reader.onload = (e:any)=>{
                        console.log(e)
                        resolve({name: uuidv4(), data: resizingFile, previewUrl: e.target.result})
                    }

                    reader.readAsDataURL(resizingFile)
                })
            )
        }

        // URL.createObjectURL이 용량을 덜 차지함
        // for(let i=0;i<files.length;i++){
        //     const resizingBlob = await imageCompression(files[i], { maxSizeMB: 0.1 });
        //     const resizingFile = new File([resizingBlob], files[i].name, { type: files[i].type });
        //     images.push({name: uuidv4(), data: files[i], previewUrl: URL.createObjectURL(resizingFile)})
        // }

        // setImage([...image, ...images])

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