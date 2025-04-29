"use client";

import * as React from "react";
import { Search, Sparkles } from "lucide-react"; // Using lucide Sparkles for now, replace if using PNG
import Image from "next/image"; // Keep if using PNG

import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface AiSearchInputProps extends Omit<InputProps, 'prefix' | 'suffix'> {
  showSearchIcon?: boolean;
  sparkleIcon?: 'inline' | 'button' | 'none';
  onSparkleClick?: () => void; // Optional handler for sparkle button/icon
  containerClassName?: string;
}

const AiSearchInput = React.forwardRef<HTMLInputElement, AiSearchInputProps>(
  ({ className, type, showSearchIcon = true, sparkleIcon = 'none', onSparkleClick, containerClassName, ...props }, ref) => {

    const SparkleComponent = () => (
      // Conditional rendering based on if we decide to use PNG or SVG:
      // Option 1: If using PNG (assuming sparkle.png is in /public)
      <Image src="/sparkle.png" alt="AI Sparkle" width={16} height={16} className="pointer-events-none" />
      // Option 2: If using lucide-react Sparkles (Defaulting to this for now)
      // <Sparkles className="h-4 w-4 pointer-events-none" />
    );


    // Component 3: Separate Button
    if (sparkleIcon === 'button') {
      return (
        <div className={cn("flex w-full items-center gap-2", containerClassName)}>
          <div className="relative flex-grow">
            {showSearchIcon && (
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            )}
            <Input
              type={type}
              className={cn(showSearchIcon ? "pl-10" : "", className)}
              ref={ref}
              {...props}
            />
          </div>
          <Button variant="outline" size="icon" onClick={onSparkleClick}>
             {/* Adjust icon size/styling as needed for button variant */}
            {/* <Sparkles className="h-5 w-5" /> */}
            <Image src="/sparkle.png" alt="AI Sparkle" width={20} height={20} />
          </Button>
        </div>
      );
    }

    // Component 4 & 5: Inline Icon or No Icon
    return (
      <div className={cn("relative w-full", containerClassName)}>
        {showSearchIcon && (
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        )}
        <Input
          type={type}
          className={cn(
            showSearchIcon ? "pl-10" : "",
            sparkleIcon === 'inline' ? "pr-10" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {sparkleIcon === 'inline' && (
          <div
             className={cn(
               "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
               onSparkleClick ? "cursor-pointer" : "pointer-events-none"
             )}
             onClick={onSparkleClick}
           >
             <SparkleComponent />
           </div>
        )}
      </div>
    );
  }
);
AiSearchInput.displayName = "AiSearchInput";

export { AiSearchInput }; 