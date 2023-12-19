import { Post } from "@types";
import Link from "next/link";
import React from "react";

interface Props {
  type: "Create" | "Update";
  submitting: boolean;
  post: Post;
  onChange: (key: keyof Post, val: Post[keyof Post]) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({
  type,
  onSubmit,
  post,
  onChange,
  submitting,
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => onChange("prompt", e.currentTarget.value)}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `} <span>(#Product, #WebDev #cricket)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => onChange("tag", e.currentTarget.value)}
            placeholder="#Tag"
            required
            type="text"
            className="form_input "
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white cursor-pointer"
          >
            {submitting ? `Please Wait...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
