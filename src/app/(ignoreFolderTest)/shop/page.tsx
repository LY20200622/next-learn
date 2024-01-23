import React from "react";
import Link from "next/link";

interface IShopPageProp {}

function ShopPage({}: IShopPageProp) {
  return (
    <>
      <div className="text-[50px]">Shop Page</div>
      <Link href="/" className="mt-[50px] block">
        ⬅️&nbsp;&nbsp;Back To Home
      </Link>
    </>
  );
}

export default ShopPage;
