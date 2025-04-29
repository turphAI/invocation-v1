"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PanelLeftClose,
  PanelLeftOpen,
  LayoutGrid,
  Square,
  Circle,
  Triangle,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define Navigation Items (can be moved elsewhere if preferred)
// Consider passing this as a prop if it needs to be configured externally
const sidebarNavItems = [
  { name: "Option 1", href: "/option1", icon: LayoutGrid },
  { name: "Option 2", href: "/option2", icon: Square },
  { name: "Option 3", href: "/option3", icon: Circle },
  { name: "Option 4", href: "/option4", icon: Triangle },
  { name: "Home", href: "/", icon: HomeIcon },
];


interface LayoutClientWrapperProps {
  children: React.ReactNode;
}

export function LayoutClientWrapper({ children }: LayoutClientWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname(); // Get current pathname

  return (
    <div className="flex min-h-screen"> {/* Sidebar layout container */}
      <aside
        className={`transition-all duration-300 ease-in-out bg-muted/40 border-r flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} p-4`}
      >
        {/* Sidebar content */}
        {!isCollapsed && (
          <div className="mb-4"> {/* Optional: Add logo/title area */}
            <h2 className="text-lg font-semibold">AI-Search invocation</h2>
          </div>
        )}
        {/* Navigation Links */}
        <nav className={`flex-1 space-y-1 ${isCollapsed ? 'mt-4' : 'mt-4'}`}>
          {sidebarNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground hover:bg-muted",
                  isCollapsed ? "justify-center" : "justify-start gap-3",
                  isActive && "bg-muted text-foreground" // Active link style
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          {/* Optional bottom content */}
        </div>
      </aside>
      <div className="flex-1 flex flex-col"> {/* Main content wrapper */}
        <header className="flex items-center h-14 border-b px-4">
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
          </Button>
          {/* Optional: Add other header elements like user profile etc. */}
        </header>
        <main className="flex-1 p-4 sm:p-8"> {/* Page content renders here */}
          {children}
        </main>
      </div>
    </div>
  );
} 