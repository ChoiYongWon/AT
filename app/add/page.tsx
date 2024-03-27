import Link from "next/link";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PageAnimate from "../provider/PageAnimate/PageAnimateOpacity";
import { CancelButtonLayout, UploadFormLayoutStyle } from "./style.css";
import CancelButton from "../component/CancelButton";
import UploadForm from "./component/UploadForm";

export default async function AddPage() {
  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <UploadForm className={UploadFormLayoutStyle} />
    </>
  );
}
