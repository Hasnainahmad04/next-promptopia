import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h2>Common layout</h2>
      {children}
    </>
  );
};

export default layout;
