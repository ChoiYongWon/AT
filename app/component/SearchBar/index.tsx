"use client";

import SearchBarView from "@/app/_common/component/SearchBar";
import { useInput } from "@/app/_common/hook/useInput";
import { SearchBarLayoutStyle } from "@/app/style.css";
import { useSession } from "next-auth/react";

type Props = {
  image: string | undefined | null
}

const SearchBar = ({image}: Props) => {

  const {
    value: content,
    onChange: onContentChange,
    setValue: setContent,
  } = useInput("");

  return (
    <SearchBarView
      title={"전국 통합 AT"}
      image={image}
      className={SearchBarLayoutStyle}
      content={content}
      onContentChange={onContentChange}
      onSearch={() => console.log(content)}
    ></SearchBarView>
  );
};

export default SearchBar;
