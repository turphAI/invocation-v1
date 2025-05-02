"use client"; // Make this a client component

import React, { useState } from 'react'; // Import useState
import { Header } from "@/components/header"; // Adjust path if needed
import { AiSearchInput } from "@/components/ai-search-input"; // Import AiSearchInput
import { cn } from "@/lib/utils"; // Import cn for conditional classes

// --- Suggestion Card Component ---
interface SuggestionCardProps {
  title: string;
  links: string[];
}

function SuggestionCard({ title, links }: SuggestionCardProps) {
  return (
    <div className="flex-1 p-4 border rounded-md bg-background">
      <h5 className="font-semibold mb-2 text-sm">{title}</h5>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
// --- End Suggestion Card ---

export default function Option4Page() {
  // State to control panel visibility
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State for input value

  // Update the click handler to toggle the panel state
  const handleSparkleClick = () => {
    setIsPanelOpen(!isPanelOpen);
    // Remove alert or keep for debugging if needed
    // alert('Standalone sparkle button clicked on Option 4 page!');
  };

  // Mock data for default cards
  const defaultSuggestions = {
    popularQuotes: {
      title: "Popular quotes",
      links: ["NVDA", "LCID", "LLY", "AMZN", "PG"],
    },
    popularSearches: {
      title: "Popular searches",
      links: [
        "Open a brokerage account",
        "Stock trade fees",
        "Margin account requirements",
        "Transfer assets to [Brokerage]", // Placeholder name
        "Research stocks",
      ],
    },
    recentSearches: {
      title: "Recent searches",
      links: [
        "How do I fund my new account?",
        "What are the risks of margin trading?",
        "Compare ETFs vs mutual funds",
        "Can I trade options in my IRA?",
        "Where can I find tax documents?",
      ],
    },
  };

  // Mock Link Data
  const mockWayfindingLinks = [
    "Link to RMD rules page",
    "RMD Calculator",
    "IRS Publication 590-B",
    "Account Login",
    "Contact Financial Advisor",
  ];
  const mockConversationPrompts = [
    "Ask: What are the penalties for missing an RMD?",
    "Ask: Can I delay my RMD?",
    "Ask: How is my RMD calculated?",
    "Ask: What if my spouse is younger?",
    "Ask: Explain inherited IRA RMD rules.",
  ];

  // Answer Snippets (Keep short/medium as strings)
  const answerSnippets = {
    short: "RMDs usually start later in life.",
    medium: "Based on current rules, RMDs generally start at age 73. Since you are 61, you likely don&apos;t need to take them yet.",
    // We'll handle 'full' directly in JSX now
  };

  // Updated Function - removed answer height calculation
  const getDynamicProperties = (length: number): {
    heights: { wayfinding: string; conversation: string }; // Answer height removed
    linkCounts: { wayfinding: number; conversation: number };
    answerContentKey: 'none' | 'short' | 'medium' | 'full';
  } => {
    if (length < 10) {
      return {
        heights: { wayfinding: 'h-24', conversation: 'h-20' },
        linkCounts: { wayfinding: 1, conversation: 1 },
        answerContentKey: 'none',
      };
    } else if (length < 20) {
      return {
        heights: { wayfinding: 'h-28', conversation: 'h-24' },
        linkCounts: { wayfinding: 2, conversation: 2 },
        answerContentKey: 'short',
      };
    } else if (length < 30) {
      return {
        heights: { wayfinding: 'h-32', conversation: 'h-28' },
        linkCounts: { wayfinding: 3, conversation: 3 },
        answerContentKey: 'medium',
      };
    } else if (length < 45) {
      return {
        heights: { wayfinding: 'h-40', conversation: 'h-32' },
        linkCounts: { wayfinding: 4, conversation: 4 },
        answerContentKey: 'medium',
      };
    } else {
      return {
        heights: { wayfinding: 'h-48', conversation: 'h-40' },
        linkCounts: { wayfinding: 5, conversation: 5 },
        answerContentKey: 'full',
      };
    }
  };

  // Get dynamic properties
  const { heights: dynamicHeights, linkCounts, answerContentKey } = getDynamicProperties(inputValue.length);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Full panel search</h1>
      <p className="mb-4">Type in: <i>When do I need to start taking my RMD, I am 61.</i></p>
      <div className="border rounded-md overflow-hidden">
        <Header 
          rightContentType="sparkleButton" // Tell Header to show only the button
          onSparkleButtonClick={handleSparkleClick} // Pass the handler for the button
        />
        {/* Slide-down Panel */}
        <div 
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isPanelOpen ? "max-h-[800px] border-t p-4" : "max-h-0" 
          )}
        >
          {/* Title */}
          <h4 className="text-lg font-semibold mb-3">Search, chat, discover</h4>
          
          {/* Search Input */}
          <AiSearchInput 
            placeholder="Search within panel..." 
            sparkleIcon="inline"
            showSearchIcon={true}
            value={inputValue} // Control input value
            onChange={(e) => setInputValue(e.target.value)} // Update state
          />
          
          {/* Suggestions Area */}
          <div className="mt-4"> 
            {inputValue.length === 0 ? (
              // Default State: 3 Cards
              <div className="flex gap-4">
                <SuggestionCard title={defaultSuggestions.popularQuotes.title} links={defaultSuggestions.popularQuotes.links} />
                <SuggestionCard title={defaultSuggestions.popularSearches.title} links={defaultSuggestions.popularSearches.links} />
                <SuggestionCard title={defaultSuggestions.recentSearches.title} links={defaultSuggestions.recentSearches.links} />
              </div>
            ) : (
              // Dynamic State
              <div className="space-y-4">
                {/* Answer Section - Removed height class */}
                <div className={cn(
                  "p-4 border rounded-md bg-blue-50 transition-all duration-300 ease-in-out overflow-y-auto"
                  // Removed: dynamicHeights.answer
                )}>
                  <h5 className="font-semibold mb-2 text-sm">Answer</h5>
                  {inputValue.toLowerCase().includes("rmd") && answerContentKey !== 'none' && (
                    <div className="mt-2 text-sm space-y-2"> {/* Add spacing between paragraphs */} 
                      {answerContentKey === 'short' && <p>{answerSnippets.short}</p>}
                      {answerContentKey === 'medium' && <p>{answerSnippets.medium}</p>}
                      {answerContentKey === 'full' && (
                        <>
                          <p>Based on current rules, Required Minimum Distributions (RMDs) from traditional retirement accounts like IRAs and 401(k)s generally must begin at age 73. Since you are 61, it is likely that you do not need to take an RMD at this time.</p>
                          <p>However, rules can change, and specific circumstances (like inherited accounts) might differ. It is highly recommended to consult a qualified financial advisor for personalized advice regarding your specific situation and to plan effectively for retirement distributions.</p>
                        </>
                      )}
                    </div>
                  )}
                  {inputValue.length > 0 && !inputValue.toLowerCase().includes("rmd") && (
                      <p className="mt-2 text-sm text-muted-foreground italic">Enter query about RMDs to see example answer content...</p>
                  )}
                </div>
                {/* Wayfinding Section (Still uses dynamic height) */}
                <div className={cn(
                  "p-4 border rounded-md bg-green-50 transition-all duration-300 ease-in-out overflow-y-auto", 
                  dynamicHeights.wayfinding // Keep using calculated height here
                )}>
                  <h5 className="font-semibold mb-2 text-sm">Wayfinding</h5>
                  <ul className="space-y-1">
                    {mockWayfindingLinks.slice(0, linkCounts.wayfinding).map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Conversation Section (Still uses dynamic height) */}
                <div className={cn(
                  "p-4 border rounded-md bg-yellow-50 transition-all duration-300 ease-in-out overflow-y-auto", 
                  dynamicHeights.conversation // Keep using calculated height here
                )}>
                  <h5 className="font-semibold mb-2 text-sm">Conversation</h5>
                  <ul className="space-y-1">
                    {mockConversationPrompts.slice(0, linkCounts.conversation).map((prompt, index) => (
                      <li key={index}>
                        <span className="text-sm text-muted-foreground">{prompt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 