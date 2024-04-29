import AddButton from "../_common/component/AddButton";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import ContentManagePage from "./view";
import { MainLayoutStyle } from "./style.css";

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
