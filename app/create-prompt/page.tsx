"use client";
import Form from "@components/Form";
import { Post } from "@types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({ prompt: "", tag: "" });
  const { data: session } = useSession();
  const router = useRouter();

  const handleChange = <K extends keyof Post>(key: K, val: Post[K]) => {
    setPost((prevPost) => ({ ...prevPost, [key]: val }));
  };

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({ ...post, userId: session?.user?.id }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      submitting={submitting}
      post={post}
      onChange={handleChange}
      onSubmit={createPost}
    />
  );
};

export default CreatePrompt;
