"use client";
// 因为要使用 usePathname

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const pathname = usePathname();

  return (
    <div>
      <div>User Layout Title, Current Pathname is: {pathname}</div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
