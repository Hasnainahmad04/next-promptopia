import { Metadata } from "next";
import React from "react";

interface Props {
  params: { id: string };
}

export function generateMetadata(): Metadata {
  return { title: "Dynamic title" };
}

const User: React.FC<Props> = ({ params: { id } }) => {
  return <div>User {id}</div>;
};

export default User;
