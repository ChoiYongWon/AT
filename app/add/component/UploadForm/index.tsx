"use client";

import { SubTitleStyle, TitleStyle } from "./style.css";
import { useState } from "react";
import PreviewImageList from "./PreviewImageList";
import PreviewImageItem from "./PreviewImageItem";
import CategoryList from "./CategoryList";
import CategoryItem from "./CategoryItem";
import { useInput } from "@/app/hook/useInput";
import { v4 as uuidv4 } from "uuid";
import { useDetectClickOutside } from "react-detect-click-outside";

type Props = {
  className?: any;
  style?: any;
};

type Category = {
  name: string;
  id: string;
};

const UploadForm = ({ className, style }: Props) => {

  // --- 상태 영역
  const [previewImage, setPreviewImage] = useState([
    "https://github.com/ChoiYongWon/AT/assets/40623433/645f8238-ea27-4b02-9d64-1916d69ca560",
    "https://github.com/ChoiYongWon/AT/assets/40623433/2d9eaa62-43d3-4758-9b23-7743487a1412",
    "https://github.com/ChoiYongWon/AT/assets/40623433/6cc779f2-e6f9-494c-b31d-12aa475152a6",
  ]);
  const [category, setCategory] = useState<Category[]>([]);
  const { value: categoryInput, onChange: onCategoryInputChange, setValue: setCategoryInput } = useInput("");
  const [categoryError, setCategoryError] = useState({enable: false, message: ""})

  // --- ref 영역

  const detectRef = useDetectClickOutside({
    onTriggered: () => {
      if(categoryError.enable) setCategoryError({enable: false, message: ""})
    },
  });

  // --- 함수 영역
  const removePreviewImage = (url: string) => {
    const arr = [...previewImage];
    const i = arr.indexOf(url);
    if (i > -1) arr.splice(i, 1);
    setPreviewImage(arr);
  };

  const addCategory = (place: any) => {
    const i = category.findIndex((c) => c.name == place); 
    if (i == -1) setCategory([...category, { name: place, id: uuidv4() }]);
    else setCategoryError({enable: true, message: "카테고리는 중복될 수 없습니다."})
  };

  
  const onCategoryInput = (e: any) => {
    // 카테고리 입력시 발동
    const name = e.target.value; 
    if(categoryError.enable){
      setCategoryError({enable: false, message: ""})
    }
    if (name.length > 0 && name[name.length - 1] == " ") {
      const regexp = /^[가-힣a-z0-9]{1,10}$/g
      if(regexp.test(categoryInput)){
        
        addCategory(categoryInput);
        setCategoryInput("");
      }else {
        setCategoryError({enable: true, message: "카테고리는 완성된 한글, 영소문자, 숫자가 10자 내외로 구성되야합니다."})
        setCategoryInput("");
      }
     
    } else onCategoryInputChange(e);
  };

  const removeCategory = (e: any, id: string) => {
    e.preventDefault();
    const newCategory = [...category];
    const i = category.findIndex((c) => c.id == id);
    newCategory.splice(i, 1);
    setCategory(newCategory);
  };

  return (
    <form className={className} style={style} onSubmit={(e) => e.preventDefault()}>
      {/* -- 사진 영역 */}
      <div className={TitleStyle} style={{ marginBottom: "10px" }}>사진 추가</div>
      <PreviewImageList previewImage={previewImage} setPreviewImage={setPreviewImage} style={{ marginBottom: "30px" }}>
        {previewImage.map((url: string) => 
            <PreviewImageItem
              key={url}
              previewImageUrl={url}
              removePreviewImage={() => removePreviewImage(url)}
            />
        )}
      </PreviewImageList>

      {/* -- 카테고리 영역 */}
      <div style={{ marginBottom: "10px" }} className={TitleStyle}>
        카테고리
        <span className={SubTitleStyle} style={{marginLeft: '4px'}}>(스페이스로 추가)</span>
      </div>
      <CategoryList ref={detectRef} onCategoryChange={onCategoryInput} categoryInput={categoryInput} categoryError={categoryError}>
        {category.map((category, i) => (
          <CategoryItem
            key={category.id}
            onDeleteClick={(e: any) => removeCategory(e, category.id)}
            categoryName={category.name}
          />
        ))}
      </CategoryList>
    </form>
  );
};

export default UploadForm;
