import AddButton from "../_common/component/AddButton";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import ContentManagePage from "./view";
import { MainLayoutStyle } from "./style.css";

export default function Home() {

  return (
    <>
      <PageAnimateOpacity key="/" className={MainLayoutStyle}>
        <ContentManagePage/>
      </PageAnimateOpacity>
      <AddButton />
    </>
  );
}
