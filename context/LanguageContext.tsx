"use client";

import React, { createContext, useContext } from "react";
import * as en from "@/lib/dictionaries/en";
import * as id from "@/lib/dictionaries/id";
import * as ms from "@/lib/dictionaries/ms";
import * as vi from "@/lib/dictionaries/vi";
import * as bn from "@/lib/dictionaries/bn";
import * as tl from "@/lib/dictionaries/tl";

const dictionaries = { en, id, ms, vi, bn, tl };

export type Language = keyof typeof dictionaries;
export type Dictionary = typeof en;

interface LanguageContextProps {
  language: Language;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ 
  children, 
  lang 
}: { 
  children: React.ReactNode;
  lang: Language;
}) => {
  const dictionary = dictionaries[lang] || dictionaries.en;

  return (
    <LanguageContext.Provider value={{ language: lang, dict: dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
