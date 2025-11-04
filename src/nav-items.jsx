import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon, CalendarIcon, BookIcon } from "lucide-react";
import Index from "./pages/Index";
import History from "./pages/History";
import Businesses from "./pages/Businesses";
import ListedBuildings from "./pages/ListedBuildings";
import Events from "./pages/Events";
import Wiki from "./pages/Wiki";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    component: Index,
  },
  {
    title: "History",
    to: "/history",
    icon: <BookOpenIcon className="h-4 w-4" />,
    component: History,
  },
  {
    title: "Businesses",
    to: "/businesses",
    icon: <BuildingIcon className="h-4 w-4" />,
    component: Businesses,
  },
  {
    title: "Listed Buildings",
    to: "/listed-buildings",
    icon: <ArchiveIcon className="h-4 w-4" />,
    component: ListedBuildings,
  },
  {
    title: "Events",
    to: "/events",
    icon: <CalendarIcon className="h-4 w-4" />,
    component: Events,
  },
  {
    title: "Wiki",
    to: "/wiki",
    icon: <BookIcon className="h-4 w-4" />,
    component: Wiki,
  },
];
