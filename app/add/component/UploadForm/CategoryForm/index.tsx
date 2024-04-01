'use client'

import { useState } from "react";
import CategoryItem from "./CategoryItem"
import CategoryList from "./CategoryList"
import { useDetectClickOutside } from "react-detect-click-outside";
import { v4 as uuidv4 } from "uuid";
import { useInput } from "@/app/hook/useInput";
import { Category, categoryState } from "@/app/add/recoil";
import { useRecoilState } from "recoil";


const CategoryForm = () => {


  const [category, setCategory] = useRecoilState<Category[]>(categoryState);
  const { value: categoryInput, onChange: onCategoryInputChange, setValue: setCategoryInput } = useInput("");
  const [categoryError, setCategoryError] = useState({enable: false, message: ""})


  const detectRef = useDetectClickOutside({
    onTriggered: () => {
      if(categoryError.enable) setCategoryError({enable: false, message: ""})
    },
  });

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
        <CategoryList ref={detectRef} onCategoryChange={onCategoryInput} categoryInput={categoryInput} categoryError={categoryError} >
            {category.map((category, i) => (
            <CategoryItem
                key={category.id}
                onDeleteClick={(e: any) => removeCategory(e, category.id)}
                categoryName={category.name}
            />
            ))}
        </CategoryList>
    )
}

export default CategoryForm