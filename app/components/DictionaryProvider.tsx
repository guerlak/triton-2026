"use client";

import React, { createContext, useContext } from "react";

interface DictionaryContextType {
  dict: Record<string, any>;
  lang: string;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined
);

export function DictionaryProvider({
  children,
  dict,
  lang,
}: {
  children: React.ReactNode;
  dict: Record<string, any>;
  lang: string;
}) {
  return (
    <DictionaryContext.Provider value={{ dict, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within DictionaryProvider");
  }
  return context;
}
