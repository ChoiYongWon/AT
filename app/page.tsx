import { GridLayoutStyle } from "./style.css";
import SearchBar from "./component/SearchBar";
import AddButton from "./_common/component/AddButton";
import PageAnimateOpacity from "./_common/provider/PageAnimate/PageAnimateOpacity";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()

  return (
    <>
      <PageAnimateOpacity key="/" className={GridLayoutStyle}>
        <SearchBar image={session?.user.image}/>
      </PageAnimateOpacity>
      <AddButton />
    </>
  );
}
