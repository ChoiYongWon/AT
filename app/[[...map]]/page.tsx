import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import ContentManagePage from "./view";
import { MainLayoutStyle } from "./style.css";
import AddButton from "./component/AddButton";

export default function Home() {

  return (
    <>
      <div className={MainLayoutStyle}>
        <ContentManagePage/>
      </div>
      <AddButton />
    </>
  );
}
