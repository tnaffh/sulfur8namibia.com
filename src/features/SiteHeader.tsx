"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
import React from "react";
import { MainNav } from "./header/MainNav";

export const SiteHeader: React.FC = () => {
  useThemeMode();

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
      <MainNav />
    </div>
  );
};
