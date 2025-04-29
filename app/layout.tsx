import React from 'react';
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import {
  // PanelLeftClose,
  // PanelLeftOpen,
  // LayoutGrid,
  // Square,
  // Circle,
  // Triangle,
  // Home as HomeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import "./globals.css";
import { LayoutClientWrapper } from "@/components/layout-client-wrapper";

// Assign the imported objects directly (no function call)
const geistSans = GeistSans;

// Assign the imported objects directly (no function call)
const geistMono = GeistMono;

// Metadata can stay, but layout is now client-side
// export const metadata: Metadata = { ... };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`antialiased`}>
        {/* Use the client wrapper to provide the sidebar/header structure */}
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
} 