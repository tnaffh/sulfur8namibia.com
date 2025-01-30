import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

export const NAVIGATION_MENU: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About Us",
  },
  {
    id: ncNanoId(),
    href: "/products",
    name: "Products",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
  },
];
