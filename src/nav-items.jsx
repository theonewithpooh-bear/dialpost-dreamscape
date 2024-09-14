import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import History from "./pages/History.jsx";
import Businesses from "./pages/Businesses.jsx";
import ListedBuildings from "./pages/ListedBuildings.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "History",
    to: "/history",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <History />,
  },
  {
    title: "Businesses",
    to: "/businesses",
    icon: <BuildingIcon className="h-4 w-4" />,
    page: <Businesses />,
  },
  {
    title: "Listed Buildings",
    to: "/listed-buildings",
    icon: <ArchiveIcon className="h-4 w-4" />,
    page: <ListedBuildings />,
  },
];
