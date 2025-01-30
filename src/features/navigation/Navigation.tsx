import { FC } from "react";
import { NAVIGATION_MENU } from "./constants/menus";
import NavigationItem from "@/shared/Navigation/NavigationItem";
export const Navigation: FC = () => {
  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_MENU.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
};
