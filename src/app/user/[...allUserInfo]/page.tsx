import React from "react";

interface IAllUserInfoPageProps {
  params: {
    allUserInfo: string[];
  };
}

function AllUserInfoPage({ params }: IAllUserInfoPageProps) {
  const { allUserInfo } = params || {};
  const allUserInfoStr = Array.isArray(allUserInfo)
    ? allUserInfo.join(", ")
    : "";

  return <div>All User Info Page, All Params is: {allUserInfoStr}</div>;
}

export default AllUserInfoPage;
