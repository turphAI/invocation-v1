"use client";

import React from 'react';
// import Image from "next/image";
import { AiSearchInput } from "@/components/ai-search-input";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      {/* Content specific to the Home page */}
      <div className="w-full max-w-md space-y-4">
        <h3 className="font-semibold">Component 3 (Button)</h3>
        <AiSearchInput
          placeholder="Search, chat, get a quote"
          sparkleIcon="button"
          showSearchIcon={true}
          onSparkleClick={() => alert('Sparkle button clicked!')}
        />
        <h3 className="font-semibold">Component 4 (Inline)</h3>
        <AiSearchInput
          placeholder="Search, chat, get a quote"
          sparkleIcon="inline"
          showSearchIcon={true}
          onSparkleClick={() => alert('Inline sparkle clicked!')}
        />
        <h3 className="font-semibold">Component 5 (Inline, No Search)</h3>
        <AiSearchInput
          placeholder="Search, chat, get a quote"
          sparkleIcon="inline"
          showSearchIcon={false}
          onSparkleClick={() => alert('Inline sparkle clicked!')}
        />
      </div>

      <div className="mt-8 border-t pt-8 w-full">
        <h3 className="mb-4 font-semibold">Header Component Preview:</h3>
        <Header />
      </div>
    </>
  );
} 