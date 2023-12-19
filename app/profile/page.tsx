"use client";
import Profile from "@components/Profile";
import { Prompt } from "@types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MyProfile = () => {
  const [postList, setPostList] = useState<Prompt[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  const fetchPosts = async () => {
    const res = await fetch(`/api/user/${session?.user?.id}/posts`);
    const data: Prompt[] = await res.json();
    setPostList(data);
  };

  useEffect(() => {
    session?.user.id && fetchPosts();
  }, [session]);

  const handleEdit = (id: string) => {
    router.push(`/update-prompt?id=${id}`);
  };

  const handleDelete = async (id: string) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${id}`, {
          method: "DELETE",
        });
        const filteredPosts = postList.filter((item) => item._id !== id);
        setPostList(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My Profile"
      data={postList}
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default MyProfile;
