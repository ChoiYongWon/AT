"use client";

import Image from "next/image";
import {
  InputWrapperStyle,
  LogoStyle,
  ProfileImageWrapperStyle,
  ProfileNameStyle,
  SearchBarWrapperStyle,
  SearchIconCheckboxStyle,
  SearchIconLabelStyle,
  SearchIconStyle,
  SearchIconWrapperStyle,
  SearchInputStyle,
} from "./style.css";
import SearchIcon from "../../../../public/images/SearchIcon.svg";
import Logo from "../../../../public/images/Loading.svg"
import Menu from "../../../../public/images/MenuBar.svg"

import { useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { setFocusTimeout } from "@toss/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import IconButton from "../IconButton";

type Props = {
  title: string | null | undefined;
  image?: string | null | undefined;
  className?: string;
  style?: any;
  content: string;
  state: string | null;
  onBlur?: () => any;
  onSearch: () => any;
  onContentChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

const SearchBar = ({
  title,
  image,
  className,
  style,
  content,
  state,
  onSearch,
  onBlur,
  onContentChange,
}: Props) => {
  const inputRef = useRef<any>(null);
  const checkRef = useRef<any>(null);
  const router = useRouter()
  const pathname = usePathname()
  // 검색창 밖에 터치시 닫힘
  const searchRef = useDetectClickOutside({
    onTriggered: () => {
      checkRef.current.checked = false;
      inputRef.current.blur();
    },
  });

  // 검색이 되는 경우
  // 1. 검색 버튼
  // 2. 엔터 버튼

  // 1. 검색 버튼
  const onSearchBtnClick = (e: any) => {
    // 열렸을때 Input 포커스
    if (!checkRef.current.checked) {
      inputRef.current.value = "";
      setFocusTimeout(
        () => inputRef.current.focus({ preventScroll: true }),
        300
      );
    } else {
      e.preventDefault();
      onSearch();
    }
  };

  // 2. 엔터 버튼
  const onSubmitBtnClick = (e: any) => {
    e.preventDefault();
    onSearch();
    checkRef.current.checked = false;
    inputRef.current.blur()
  };

  // 제목 클릭 핸들러
  const onTitleClick = () => {
    if(pathname != '/') router.push("/")
  }

  const onPrevClick = () => {
    router.back()
  }

  return (
    <>
      <div
        ref={searchRef}
        className={`${SearchBarWrapperStyle} ${className}`}
        style={style}
      >

        {
          state ? 
          <IconButton size="34px" type="prev" onClick={onPrevClick}/>
          :
          // <Link className={ProfileImageWrapperStyle} href={"/profile"} prefetch={true}>
          // {
          //   image ? <Image src={image} alt="" width={100} height={100} priority={true} /> : <Image src={Menu} className={LogoStyle} alt="" width={100} height={100} />
          // }
          
          // </Link>
          <Link className={ProfileImageWrapperStyle} href={"/profile"} prefetch={true}>
            <Image src={Menu} className={LogoStyle} alt="" width={100} height={100} />
          </Link>
        }
        

        <div onClick={onTitleClick} className={ProfileNameStyle}>{title}</div>
        <div className={SearchIconWrapperStyle}>
          <label
            htmlFor="checkbox"
            className={SearchIconLabelStyle}
            onClick={onSearchBtnClick}
          >
            {/* <IconButton size="34px" className={SearchIconWrapperStyle} type="search"/> */}
            <Image src={SearchIcon} alt="" className={SearchIconStyle} priority={true}/>
          </label>
          <input
            ref={checkRef}
            type="checkbox"
            id="checkbox"
            className={SearchIconCheckboxStyle}
          />
        </div>
        <form className={InputWrapperStyle}>
          <input
            ref={inputRef}
            type="text"
            className={SearchInputStyle}
            placeholder="검색어를 입력해주세요 (스페이스로 추가)"
            value={content}
            onChange={onContentChange}
            onBlur={onBlur}
          />
          <input type="submit" hidden onClick={onSubmitBtnClick} />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
