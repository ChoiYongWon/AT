"use client";

import SearchBar from "./components/SearchBar";
import { useInput } from "./hooks/useInput";
import { GridLayoutStyle, SearchBarLayoutStyle } from "./style.css";

export default function Home() {
  const {
    value: content,
    onChange: onContentChange,
    setValue: setContent,
  } = useInput("");

  return (
    <>
      <div className={GridLayoutStyle}>
        <SearchBar
          profileName="@rto_olzo"
          profileImage="https://avatars.githubusercontent.com/u/40623433?v=4"
          className={SearchBarLayoutStyle}
          content={content}
          onContentChange={onContentChange}
          onSearch={() => console.log(content)}
        ></SearchBar>
      </div>
    </>
  );
}
