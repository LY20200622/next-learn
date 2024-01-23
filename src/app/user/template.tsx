import React, { ReactNode } from "react";

interface IUserTemplateProps {
  children: ReactNode;
}

function UserTemplate({ children }: IUserTemplateProps) {
  return (
    <div>
      <div>User Template Title</div>
      <div>{children}</div>
    </div>
  );
}

export default UserTemplate;
