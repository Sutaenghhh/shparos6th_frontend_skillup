import SearchIcon from "@/icons/SearchIcon";
import gnbMenuIcon from "../assets/icons/gnbMenuIcon.svg";
import CartIcon from "@/icons/CartIcon";
import { gnbMenuType } from "@/types/initialDataTypes";
export const navMenuData: gnbMenuType[] = [
  {
    id: 1,
    title: "gnb",
    icon: gnbMenuIcon,
  },

  {
    id: 2,
    title: "search",
    icon: SearchIcon,
  },

  {
    id: 3,
    title: "cart",
    icon: CartIcon,
  },
];
