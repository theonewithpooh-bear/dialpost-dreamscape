import { HomeIcon, BookOpenIcon, BuildingIcon, ArchiveIcon, CalendarIcon, BookIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import History from "./pages/History.jsx";
import Businesses from "./pages/Businesses.jsx";
import ListedBuildings from "./pages/ListedBuildings.jsx";
import Events from "./pages/Events.jsx";
import Wiki from "./pages/Wiki.jsx";
import AlphaExplanation from "./pages/AlphaExplanation.jsx";

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
  {
    title: "Events",
    to: "/events",
    icon: <CalendarIcon className="h-4 w-4" />,
    page: <Events />,
  },
  {
    title: "Wiki",
    to: "/wiki",
    icon: <BookIcon className="h-4 w-4" />,
    page: <Wiki />,
  },
  {
    title: "Alpha Explanation",
    to: "/alpha-explanation",
    icon: null,
    page: <AlphaExplanation />,
    hidden: true,
  },
];
