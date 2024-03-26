import { GridLayoutStyle } from "./style.css";
import SearchBar from "./container/SearchBar";
import AddButton from "./component/AddButton";
import PageAnimateOpacity from "./provider/PageAnimate/PageAnimateOpacity";
import PageAnimateLeft from "./provider/PageAnimate/PageAnimateLeft";

export default function Home() {
  return (
    <>
      <PageAnimateLeft key="/" className={GridLayoutStyle}>
        <SearchBar />
      </PageAnimateLeft>
      <AddButton />
    </>
  );
}
