"use client";

import SearchBarView from "@/app/component/SearchBar";
import { useInput } from "@/app/hook/useInput";
import { SearchBarLayoutStyle } from "@/app/style.css";
import { useRouter } from "next/navigation";

type Props = {
  title?: string | null | undefined;
  image?: string | null | undefined;
};

const SearchBar = ({ title, image }: Props) => {
  const {
    value: content,
    onChange: onContentChange,
    setValue: setContent,
  } = useInput("");
  const router = useRouter();

  return (
    <SearchBarView
      title={title}
      image={image}
      className={SearchBarLayoutStyle}
      content={content}
      onContentChange={onContentChange}
      onSearch={() => console.log(content)}
      onProfileClick={() => router.push("/profile")}
    ></SearchBarView>
  );
};

export default SearchBar;
