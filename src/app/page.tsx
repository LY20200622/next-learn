import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="text-[50px]">Home Page</div>
      <Link
        href={{
          pathname: "/user",
        }}
      >
        To User Page&nbsp;&nbsp;➡️
      </Link>
      <Link
        href={{
          pathname: "/user/settings",
        }}
      >
        To Settings Page&nbsp;&nbsp;➡️
      </Link>
      <br />
      <Link
        href={{
          pathname: "/shop",
        }}
      >
        To Shop Page&nbsp;&nbsp;➡️
      </Link>
    </>
  );
}
