import Link from "next/link";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PageAnimate from "../provider/PageAnimate/PageAnimateOpacity";
import { CancelButtonLayout } from "./style.css";
import CancelButton from "../component/CancelButton";

export default async function AddPage() {
  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
    </>
  );
}
