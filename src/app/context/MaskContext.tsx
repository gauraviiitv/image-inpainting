"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type MaskContextType = {
  mask: string | null;
  setMask: (value: string | null) => void;
  originalImage: string | null;
  setOriginalImage: (value: string | null) => void;
};

const MaskContext = createContext<MaskContextType | undefined>(undefined);

export const MaskProvider = ({ children }: { children: ReactNode }) => {
  const [mask, setMask] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  return (
    <MaskContext.Provider value={{ mask, setMask, originalImage, setOriginalImage }}>
      {children}
    </MaskContext.Provider>
  );
};

export const useMask = () => {
  const context = useContext(MaskContext);
  if (!context) {
    throw new Error("useMask must be used within a MaskProvider");
  }
  return context;
};
