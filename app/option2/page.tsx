import React from 'react';
import { Header } from "../../components/header";

export default function Option2Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option 2 View</h1>
      <p className="mb-4">This page will display variation 2.</p>
      <div className="border rounded-md overflow-hidden">
        <Header />
      </div>
    </div>
  );
} 