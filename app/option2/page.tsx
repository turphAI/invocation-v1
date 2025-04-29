"use client"; // Make this a client component

import React from 'react';
// Adjust import path if needed
import { Header } from "@/components/header"; 

export default function Option2Page() {

  // Define the click handler for the sparkle button
  const handleSparkleClick = () => {
    alert('Sparkle button clicked on Option 2 page!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option 2 View</h1>
      <p className="mb-4">This page will display variation 2.</p>
      {/* Render the Header component with custom props */}
      <div className="border rounded-md overflow-hidden">
        <Header 
          aiSearchPlaceholder="Search... (Button variant)" // Optional: Custom placeholder
          aiSearchSparkleVariant="button" // Set variant to button
          onAiSearchSparkleClick={handleSparkleClick} // Pass handler
        />
      </div>
    </div>
  );
} 