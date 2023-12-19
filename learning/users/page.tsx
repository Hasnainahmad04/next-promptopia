import { Metadata } from "next";

interface User {
  name: string;
  id: number;
  gender: string;
}

export const metadata: Metadata = {
  title: "Users",
};

const Users = async () => {
  const userInJson = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  const users: User[] = await userInJson.json();
  return (
    <ul className="mx-3 mt-6 list-disc">
      {users.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Users;
