import { Routes } from "../Routes/RouteConstants";
export const navConstants = {
    explore : "Explore",
    search : "Search",
    hotel : "Hotels",
    offers : "Offers",
    menu : "Menu",
    altText : "Icon"
}

export const navLinks = [
  { label: navConstants.explore, path: Routes.HOME, active: true },
  { label: navConstants.search, path: Routes.ROOT },
  { label: navConstants.hotel, path: Routes.ROOT },
  { label: navConstants.offers, path: Routes.ROOT },
];
