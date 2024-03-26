"use client";

import SearchBarView from "@/app/component/SearchBar";
import { useInput } from "@/app/hook/useInput";
import { SearchBarLayoutStyle } from "@/app/style.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const session = useSession();

  const {
    value: content,
    onChange: onContentChange,
    setValue: setContent,
  } = useInput("");
  const router = useRouter();

  return (
    <SearchBarView
      title={"전국 통합 AT"}
      image={session.data?.user?.image}
      className={SearchBarLayoutStyle}
      content={content}
      onContentChange={onContentChange}
      onSearch={() => console.log(content)}
      onProfileClick={() => router.push("/profile")}
    ></SearchBarView>
  );
};

export default SearchBar;
