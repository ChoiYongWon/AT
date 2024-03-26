import { GridLayoutStyle } from "./style.css";
import SearchBar from "./container/SearchBar";
import PageAnimate from "./Provider/PageAnimate";

export default function Home() {
  return (
    <>
      <PageAnimate className={GridLayoutStyle}>
        <SearchBar />
      </PageAnimate>
    </>
  );
}
