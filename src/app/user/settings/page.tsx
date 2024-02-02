"use client";
// 因为要使用 useRouter

import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ISettingsProps {}

function Settings({}: ISettingsProps) {
  const router = useRouter();

  const gotoUser = useCallback(() => {
    router.push("/user");
  }, [router]);

  return (
    <>
      <div className="text-[50px] bg-amber-300 text-black">Settings Page</div>
      <div
        className="w-[160px] h-[80px] text-white flex justify-center items-center cursor-pointer select-none"
        onClick={gotoUser}
      >
        To User Page
      </div>
      <Link href="/" className="mt-[50px] block">
        ⬅️&nbsp;&nbsp;Back To Home
      </Link>
    </>
  );
}

export default Settings;
