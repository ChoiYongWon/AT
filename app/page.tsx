import { GridLayoutStyle } from "./style.css";
import SearchBar from "./container/SearchBar";
import PageAnimateOpacity from "./provider/PageAnimate/PageAnimateOpacity";
import AddButton from "./component/AddButton";

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
