import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="text-[50px]">Home Page</div>
      <Link href="user">To User Page&nbsp;&nbsp;➡️</Link>
      <Link href="user/settings">To Settings Page&nbsp;&nbsp;➡️</Link>
    </>
  );
}
