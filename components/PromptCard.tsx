"use client";
import { Prompt } from "@types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {maskEmail} from "@utils";

interface Props {
  prompt: Prompt;
  onTagClick?: (tag: string) => void;
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
}

const PromptCard: React.FC<Props> = ({
  onTagClick,
  prompt,
  handleDelete,
  handleEdit,
}) => {
  const { data: session } = useSession();
  const [copied, setCopied] = useState("");
  const pathName = usePathname();


  const handleCopy = async (text: string) => {
    setCopied(text);
    await navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            alt="User Profile"
            src={prompt?.creator?.image ?? ''}
            width={37}
            height={37}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {maskEmail(prompt.creator.email)}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => handleCopy(prompt.prompt)}>
          <Image
            src={
              copied == prompt.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy"
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{prompt.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => onTagClick && onTagClick(prompt.tag)}
      >
        {prompt.tag}
      </p>

      {session?.user?.id === prompt?.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex justify-end gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => handleEdit && handleEdit(prompt._id)}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => handleDelete && handleDelete(prompt._id)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
