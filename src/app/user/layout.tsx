"use client";
// 因为要使用 usePathname

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ILayoutProps {
  children: ReactNode;
  analysis: ReactNode;
  profile: ReactNode;
}

function Layout({ children, analysis, profile }: ILayoutProps) {
  const pathname = usePathname();

  return (
    <div>
      <div className="bg-red-300 text-black">
        User Layout Title, Current Pathname is: {pathname}
      </div>
      <div>{children}</div>
      <div className="mt-[50px] flex justify-between items-center">
        {profile}
        {analysis}
      </div>
    </div>
  );
}

export default Layout;
