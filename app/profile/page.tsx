"use client";

import { signOut, useSession } from "next-auth/react";
import { CancelButtonLayout, TmpRestLayout } from "./style.css";
import CancelButton from "../component/CancelButton";

export default function Profile() {
  const session = useSession();

  return (
    <>
      <div className={CancelButtonLayout}>
        <CancelButton />
      </div>
      <div className={TmpRestLayout}>{session.data?.user.name}</div>
      <div className={TmpRestLayout}>{session.data?.user.email}</div>
      <div className={TmpRestLayout}>{session.data?.user.at_id}</div>
      <div className={TmpRestLayout}>{session.data?.user.id}</div>


      <div className={TmpRestLayout}>
        <button
          style={{ color: "black", padding: "8px" }}
          onClick={() => signOut()}
        >
          로그아웃
        </button>
      </div>
    </>
  );
}
