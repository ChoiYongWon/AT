import { GridLayoutStyle } from "./style.css";
import SearchBar from "./container/SearchBar";
import AddButton from "./component/AddButton";
import PageAnimateOpacity from "./provider/PageAnimate/PageAnimateOpacity";

export default function Home() {
  return (
    <>
      <PageAnimateOpacity key="/" className={GridLayoutStyle}>
        <SearchBar />
        <AddButton />
      </PageAnimateOpacity>
    </>
  );
}
