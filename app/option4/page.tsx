import React from 'react';
import { Header } from "../../components/header"; // Adjust path if needed

export default function Option4Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option 4 View</h1>
      <p className="mb-4">This page will display variation 4.</p>
      <div className="border rounded-md overflow-hidden">
        <Header />
      </div>
    </div>
  );
} 