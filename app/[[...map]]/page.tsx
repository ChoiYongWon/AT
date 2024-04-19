import SearchBar from "./component/SearchBar";
import AddButton from "../_common/component/AddButton";
import PageAnimateOpacity from "../_common/provider/PageAnimate/PageAnimateOpacity";
import { auth } from "@/auth";
import { MainLayoutStyle } from "./style.css";
import Image from "next/image";
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
