"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronRight, X } from "lucide-react";
import { helpDictionaries, HelpCategory, HelpItem } from "@/lib/data/helpCenter";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

export default function HelpCenterPage() {
  const { language } = useLanguage();
  const data = helpDictionaries[language] || helpDictionaries.en;

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<HelpCategory>("general");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter content based on search query
  const getFilteredContent = () => {
    if (!searchQuery.trim()) return data.content[activeCategory];

    const query = searchQuery.toLowerCase();
    const results: HelpItem[] = [];
    
    // Search across all categories if typing
    Object.values(data.content).forEach((categoryItems) => {
      categoryItems.forEach((item) => {
        if (
          item.question.toLowerCase().includes(query) ||
          (Array.isArray(item.answer)
            ? item.answer.some((a) => a.toLowerCase().includes(query))
            : item.answer.toLowerCase().includes(query))
        ) {
          if (!results.includes(item)) results.push(item);
        }
      });
    });
    
    return results;
  };

  const currentItems = getFilteredContent();
  const isSearching = searchQuery.trim().length > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden pb-20">
      <Navbar />
      
      <div className="pt-28 md:pt-36 px-4">
        {/* Background Effects */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.12),transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header & Search */}
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-4xl font-black tracking-tight text-yellow-400 sm:text-5xl md:text-6xl">
              {data.title}
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 md:text-lg">
              {data.subtitle}
            </p>

          <div className="mx-auto mt-8 max-w-2xl relative">
            <div className="relative flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl transition focus-within:border-yellow-300/50 focus-within:ring-1 focus-within:ring-yellow-300/50">
              <span className="pl-4 pr-2 text-slate-400">
                <Search size={20} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={data.searchPlaceholder}
                className="w-full bg-transparent py-3 pl-2 pr-10 text-white outline-none placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-slate-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
          {/* Categories Sidebar */}
          {!isSearching && (
            <div className="flex flex-col gap-3">
              {data.categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-yellow-300/30 bg-yellow-300/10 shadow-[0_0_30px_rgba(250,204,21,0.1)]"
                        : "border-white/5 bg-white/[0.02] hover:bg-white/5"
                    }`}
                  >
                    <div
                      className={`mt-0.5 grid shrink-0 place-items-center rounded-xl p-2.5 transition-colors ${
                        isActive
                          ? "bg-yellow-300 text-slate-950"
                          : "bg-white/10 text-slate-400 group-hover:text-yellow-100"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3
                        className={`font-bold ${
                          isActive ? "text-yellow-100" : "text-slate-200"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Content Area */}
          <div className={isSearching ? "md:col-span-2" : ""}>
            {isSearching && (
              <h3 className="mb-6 text-xl font-bold text-white">
                Search Results ({currentItems.length})
              </h3>
            )}

            <div className="flex flex-col gap-3">
              {currentItems.length === 0 ? (
                <div className="rounded-2xl border border-white/5 bg-white/5 p-8 text-center text-slate-400">
                  No results found for "{searchQuery}"
                </div>
              ) : (
                currentItems.map((item, index) => {
                  const isExpanded = expandedId === item.question;

                  return (
                    <div
                      key={index}
                      className={`overflow-hidden rounded-2xl border transition-colors ${
                        isExpanded
                          ? "border-yellow-300/30 bg-white/5"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : item.question)
                        }
                        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                      >
                        <span className="font-semibold text-white sm:text-lg">
                          {item.question}
                        </span>
                        <div
                          className={`grid shrink-0 place-items-center rounded-full p-1 transition-all ${
                            isExpanded
                              ? "bg-yellow-300 text-slate-950 rotate-180"
                              : "bg-white/10 text-slate-400"
                          }`}
                        >
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                            <div className="border-t border-white/5 px-5 pb-6 pt-4 text-slate-300 md:px-6">
                              {Array.isArray(item.answer) ? (
                                <ul className="space-y-6">
                                  {item.answer.map((line, i) => (
                                    <li key={i} className="flex flex-col gap-3">
                                      <div className="flex gap-3">
                                        <ChevronRight
                                          size={18}
                                          className="mt-0.5 shrink-0 text-yellow-300/70"
                                        />
                                        <span className="leading-relaxed">{line}</span>
                                      </div>
                                      {item.images && item.images[i] && (
                                        <div className="mt-2 w-full max-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5 sm:max-w-[320px]">
                                          <img 
                                            src={`/links${item.images[i]}`} 
                                            alt={`Step illustration ${i + 1}`} 
                                            className="h-auto w-full object-contain rounded-lg"
                                            loading="lazy"
                                          />
                                        </div>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <div className="space-y-6 leading-relaxed text-slate-300">
                                  {item.answer.split(/(?=\d\.\s)/).map((part, idx) => (
                                    <div key={idx} className="flex flex-col gap-3">
                                      <p>{part}</p>
                                      {item.images && item.images[idx] && (
                                        <div className="mt-2 w-full max-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5 sm:max-w-[320px]">
                                          <img 
                                            src={`/links${item.images[idx]}`} 
                                            alt={`Step illustration ${idx + 1}`} 
                                            className="h-auto w-full object-contain rounded-lg"
                                            loading="lazy"
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
