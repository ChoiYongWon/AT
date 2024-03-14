"use client";

import Image from "next/image";
import {
  EmptyProfileImageStyle,
  InputWrapperStyle,
  ProfileImageWrapperStyle,
  ProfileNameStyle,
  SearchBarWrapperStyle,
  SearchIconCheckboxStyle,
  SearchIconLabelStyle,
  SearchIconStyle,
  SearchIconWrapperStyle,
  SearchInputStyle,
} from "./style.css";
import SearchIcon from "../../../public/images/SearchIcon.svg";
import { useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { setFocusTimeout } from "@toss/utils";

type Props = {
  profileName: string;
  profileImage?: string;
  className?: string;
  style?: any;
  content: string;
  onSearch: () => any;
  onContentChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

const SearchBar = ({
  profileName,
  profileImage,
  className,
  style,
  content,
  onSearch,
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
  };

  return (
    <>
      <div
        ref={searchRef}
        className={`${SearchBarWrapperStyle} ${className}`}
        style={style}
      >
        <div className={ProfileImageWrapperStyle}>
          {profileImage ? (
            <Image src={profileImage} alt="" width={100} height={100} />
          ) : (
            <div className={EmptyProfileImageStyle}></div>
          )}
        </div>
        <div className={ProfileNameStyle}>{profileName}</div>
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
            placeholder="검색어를 입력해주세요"
            value={content}
            onChange={onContentChange}
          />
          <input type="submit" hidden onClick={onSubmitBtnClick} />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
