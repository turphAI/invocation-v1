"use client"; // Make this a client component

import React from 'react';
import { Header } from "@/components/header"; // Adjust path if needed

export default function Option3Page() {

  // Define the click handler for the sparkle icon
  const handleSparkleClick = () => {
    alert('Inline sparkle clicked on Option 3 page!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option 3 View</h1>
      <p className="mb-4">This page will display variation 3.</p>
      <div className="border rounded-md overflow-hidden">
        <Header 
          aiSearchPlaceholder="Search... (Inline, No Search)" // Optional: Custom placeholder
          aiShowSearchIcon={false} // Hide the search icon
          // aiSearchSparkleVariant defaults to 'inline'
          onAiSearchSparkleClick={handleSparkleClick} // Pass handler
        />
      </div>
    </div>
  );
} 