import { GridLayoutStyle, SearchBarLayoutStyle } from "./style.css";
import SearchBar from "./container/SearchBar";
import { auth } from "../auth";
import { Session } from "next-auth";

export default async function Home() {
  const { user } = ((await auth()) as Session) || { user: null };

  return (
    <>
      <div className={GridLayoutStyle}>
        <SearchBar title={"전국 통합 맛집지도"} image={user?.image} />
      </div>
    </>
  );
}
