"use client";

import Image from "next/image";
import {
  EmptyProfileImageStyle,
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
import { useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { setFocusTimeout } from "@toss/utils";
import Link from "next/link";

type Props = {
  title: string | null | undefined;
  image?: string | null | undefined;
  className?: string;
  style?: any;
  content: string;
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
  onSearch,
  onBlur,
  onContentChange,
}: Props) => {
  const inputRef = useRef<any>(null);
  const checkRef = useRef<any>(null);
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

  return (
    <>
      <div
        ref={searchRef}
        className={`${SearchBarWrapperStyle} ${className}`}
        style={style}
      >
        {image ? (
          <Link className={ProfileImageWrapperStyle} href={"/profile"} prefetch={true}>
            <Image src={image} alt="" width={100} height={100} />
          </Link>
        ) : (
          <Link className={ProfileImageWrapperStyle} href={"/login"} prefetch={true}>
            <Image src={Logo} className={LogoStyle} alt="" width={100} height={100} />
          </Link>
        )}

        <div className={ProfileNameStyle}>{title}</div>
        <div className={SearchIconWrapperStyle}>
          <label
            htmlFor="checkbox"
            className={SearchIconLabelStyle}
            onClick={onSearchBtnClick}
          >
            <Image src={SearchIcon} alt="" className={SearchIconStyle} />
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
