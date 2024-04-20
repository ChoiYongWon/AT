import AddButton from "../_common/component/AddButton";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import { MainLayoutStyle } from "./style.css";
import Map from "./component/Map";

export default function Home() {

  return (
    <>
      <PageAnimateOpacity key="/" className={MainLayoutStyle}>
        <Map/>
      </PageAnimateOpacity>
      <AddButton />
    </>
  );
}
