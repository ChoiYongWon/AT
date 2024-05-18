import ContentManagePage from "./view";
import { MainLayoutStyle } from "./style.css";
import AddButton from "./component/AddButton";
import GpsButton from "./component/GpsButton";

export default function Home() {

  return (
    <>
      <div className={MainLayoutStyle}>
        <ContentManagePage/>
      </div>
      <GpsButton />
      <AddButton />
    </>
  );
}
