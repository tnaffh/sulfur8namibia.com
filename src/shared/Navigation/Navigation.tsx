import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_MENU } from "@/features/navigation/constants/menus";

function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_MENU.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
