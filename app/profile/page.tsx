"use client";

import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return (
    <>
      <h1>{session.data?.user.name}</h1>
      <h2>{session.data?.user.email}</h2>
      <button
        style={{ color: "black", padding: "8px" }}
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    </>
  );
}
