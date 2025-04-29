"use client";

import * as React from "react";
import Link from "next/link";
import { CircleUser, ChevronDown, MessageSquare } from "lucide-react"; // Using MessageSquare for chat icon placeholder

import { cn } from "../lib/utils"; // Relative path from components/ to lib/
import { AiSearchInput } from "./ai-search-input"; // Relative path within components/

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    // Placeholder nav items from image
    const utilityNav = [
      { name: "Customer Service", href: "#" },
      { name: "Profile", href: "#" },
      { name: "Open an account", href: "#" },
      { name: "AI Assistant", href: "#" }, // Assuming this name
      { name: "Log out", href: "#" },
    ];
    const mainNav = [
      { name: "Accounts", href: "#" },
      { name: "Planning", href: "#" },
      { name: "Research", href: "#", dropdown: true },
      { name: "Products & Services", href: "#", dropdown: true },
    ];

    return (
      <header
        ref={ref}
        className={cn(
          "w-full border-b bg-background",
          className
        )}
        {...props}
      >
        {/* Top Row */}
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          {/* Logo Placeholder */}
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <CircleUser className="h-6 w-6 text-blue-500" /> {/* Placeholder Logo Icon */}
            <span className="text-blue-500">Product company</span>
          </Link>

          {/* Utility Navigation */}
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            {utilityNav.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-foreground">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="container mx-auto flex h-12 items-center justify-between px-4"> {/* No border-t here */}
          {/* Main Navigation */}
          <nav className="flex items-center gap-6 text-sm font-medium">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          {/* AI Search Input */}
          <div className="w-full max-w-xs">
            <AiSearchInput
              placeholder="How can we help?"
              sparkleIcon="inline" // Represents the chat icon position
              showSearchIcon={true}
              // Note: To show the actual chat icon, you'd modify AiSearchInput
              // to accept an icon component prop or use MessageSquare directly.
            />
          </div>
        </div>
      </header>
    );
  }
);
Header.displayName = "Header";

export { Header }; 