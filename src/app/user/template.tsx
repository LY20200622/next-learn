import React, { ReactNode } from "react";

interface IUserTemplateProps {
  children: ReactNode;
}

function UserTemplate({ children }: IUserTemplateProps) {
  return (
    <div>
      <div className="bg-blue-300 text-black">User Template Title</div>
      <div className="mt-[50px]">{children}</div>
    </div>
  );
}

export default UserTemplate;
