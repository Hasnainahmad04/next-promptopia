import Feed from "@components/Feed";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Promptopia By Hasnain",
  description: "A simple clone of Promptopia in Next js",
  robots: { follow: true, index: true, "max-image-preview": "standard" },
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Promptopia By Hasnain",
    "Promptopia",
  ],
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/7931f7df-59b4-4b8e-952e-9caa9e308ada.jpg?token=4r4vrR2yOogu3i8ZOTF8XzL1Z0MwDEGzJ8s7sdp3oHQ&height=800&width=1200&expires=33240886192",
        alt: "Demo Image",
        width: 1200,
        height: 800,
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
        url: "https://opengraph.b-cdn.net/production/documents/7931f7df-59b4-4b8e-952e-9caa9e308ada.jpg?token=4r4vrR2yOogu3i8ZOTF8XzL1Z0MwDEGzJ8s7sdp3oHQ&height=800&width=1200&expires=33240886192",
        alt: "Demo Image",
        width: 1200,
        height: 800,
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
