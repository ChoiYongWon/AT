import SearchBar from "./component/SearchBar";
import AddButton from "../_common/component/AddButton";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import { auth } from "@/auth";
import { MainLayoutStyle, MapStyle, MapTmpLayoutStyle } from "./style.css";
import Image from "next/image";
import Map from "../../public/images/map.svg"

export default function Home() {

  return (
    <>
      <PageAnimateOpacity key="/" className={MainLayoutStyle}>
        <div className={MapTmpLayoutStyle}>
          <Image src={Map} className={MapStyle} alt="map"/>
        </div>
        
      </PageAnimateOpacity>
      <AddButton />
    </>
  );
}
