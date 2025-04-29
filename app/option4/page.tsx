"use client"; // Make this a client component

import React from 'react';
import { Header } from "@/components/header"; // Adjust path if needed

export default function Option4Page() {

  // Define the click handler for the standalone sparkle button
  const handleSparkleClick = () => {
    alert('Standalone sparkle button clicked on Option 4 page!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option 4 View</h1>
      <p className="mb-4">This page will display variation 4.</p>
      <div className="border rounded-md overflow-hidden">
        <Header 
          rightContentType="sparkleButton" // Tell Header to show only the button
          onSparkleButtonClick={handleSparkleClick} // Pass the handler for the button
        />
      </div>
    </div>
  );
} 