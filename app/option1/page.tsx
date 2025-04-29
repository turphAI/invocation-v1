"use client"; // Make this a client component to use handlers

import React from 'react';
// Adjust import path if needed - assumes components folder is at the root
import { Header } from "@/components/header"; 

export default function Option1Page() {

  // Define the click handler for the sparkle icon
  const handleSparkleClick = () => {
    alert('Inline sparkle clicked on Option 1 page!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option 1 View</h1>
      <p className="mb-4">This page will display variation 1.</p>
      {/* Render the Header component with custom props */}
      <div className="border rounded-md overflow-hidden">
        <Header 
          aiSearchPlaceholder="Search, chat, get a quote" 
          onAiSearchSparkleClick={handleSparkleClick}
        />
      </div>
    </div>
  );
} 