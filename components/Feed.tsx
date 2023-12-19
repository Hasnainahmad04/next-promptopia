"use client";

import { Prompt } from "@types";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

interface PromptCardListProps {
  data: Prompt[];
  handleTagClick: (tag: string) => void;
}

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          onTagClick={() => handleTagClick(prompt.tag)}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [serachText, setSearchText] = useState("");
  const [promptList, setPromptList] = useState<Prompt[]>([]);
  const [searchResult, setSearchResult] = useState<Prompt[]>([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/prompt");
    const data: Prompt[] = await res.json();
    setPromptList(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i");
    return promptList.filter(
      (item) => regex.test(item.tag) || regex.test(item.prompt)
    );
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);
    const searchResult = filterPrompts(tag);
    setSearchResult(searchResult);
  };

  const handleInputChange = (text: string) => {
    setSearchText(text);
    setTimeout(() => {
      const searchResult = filterPrompts(text);
      setSearchResult(searchResult);
    }, 500);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for Prompts/User"
          className="search_input peer"
          value={serachText}
          onChange={(e) => handleInputChange(e.currentTarget.value)}
          required
        />
      </form>
      <PromptCardList
        data={serachText.length > 1 ? searchResult : promptList}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
