import Feed from "@components/Feed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg",
        alt: "Demo Image",
        width: 800,
        height: 600,
      },
    ],
    title: "Promptopia",
    description: "Discover & Prompt AI Prompts",
    url: "https://next-crud-hasnainahmad04.vercel.app/",
  },
  twitter: {
    title: "Promptopia",
    card: "summary_large_image",
    images: [
      {
        url: "https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg",
        alt: "Demo Image",
        width: 800,
        height: 600,
      },
    ],
    site: "https://next-crud-hasnainahmad04.vercel.app/",
    description: "Discover & Prompt AI Prompts",
  },
};

const App = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>

        <Feed />
      </section>
    </>
  );
};

export default App;
