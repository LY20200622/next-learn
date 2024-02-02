/**
 * @description 路由为: /user/[uid]
 */

import React from "react";

interface ITargetUserProps {
  params: {
    uid: string;
  };
}

export async function generateStaticParams() {
  try {
    const users = await fetch("https://localhost:3000/config/users").then(
      (res) => res.json(),
    );

    return users.map((user: any) => ({
      uid: user.uid,
    }));
  } catch (e) {
    console.log(e);

    return [];
  }
}

function TargetUser({ params: { uid } }: ITargetUserProps) {
  return <div className="text-[50px]">Target User Page, Uid is: {uid}</div>;
}

export default TargetUser;
