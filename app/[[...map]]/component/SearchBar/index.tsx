"use client";

import SearchBarView from "@/app/_common/component/SearchBar";
import { useInput } from "@/app/_common/hook/useInput";
import { useSession } from "next-auth/react";
import { SearchBarLayoutStyle } from "../../style.css";

type Props = {
  image: string | undefined | null
  className: any
  title : string
}

const SearchBar = ({image, title, className}: Props) => {

  const {
    value: content,
    onChange: onContentChange,
    setValue: setContent,
  } = useInput("");

  return (
    <SearchBarView
      title={title}
      image={image}
      className={className}
      content={content}
      onContentChange={onContentChange}
      onSearch={() => console.log(content)}
    ></SearchBarView>
  );
};

export default SearchBar;
