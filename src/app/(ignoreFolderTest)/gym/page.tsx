import React from "react";
import Link from "next/link";

interface IGYMPageProps {}

function GYMPage({}: IGYMPageProps) {
  return (
    <>
      <div className="text-[50px]">GYM Page</div>
      <Link href="/" className="mt-[50px] block">
        ⬅️&nbsp;&nbsp;Back To Home
      </Link>
    </>
  );
}

export default GYMPage;
