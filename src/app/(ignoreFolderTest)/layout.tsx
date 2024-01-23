import React from "react";

interface IRouteGroupShareRootLayoutProps {
  children: React.ReactNode;
}

function RouteGroupShareRootLayout({
  children,
}: IRouteGroupShareRootLayoutProps) {
  return (
    <>
      <div>RouteGroupShareRootLayout Title</div>
      <div>{children}</div>
    </>
  );
}

export default RouteGroupShareRootLayout;
