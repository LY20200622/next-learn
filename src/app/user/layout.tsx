import React, { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <div>User Layout Title</div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
