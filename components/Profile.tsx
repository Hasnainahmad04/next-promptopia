import { Prompt } from "@types";
import React from "react";
import PromptCard from "./PromptCard";

interface Props {
  name: string;
  desc: string;
  data: Prompt[];
  handleDelete?: (id: string) => void;
  handleEdit?: (id: string) => void;
}

const Profile: React.FC<Props> = ({
  name,
  desc,
  data,
  handleDelete,
  handleEdit,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">{name}</h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-16 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
