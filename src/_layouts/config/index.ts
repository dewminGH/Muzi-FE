import { setUserSignOut } from "../../_data/localStorage";

export const drawerWidth = 240;
export const navItems = [
  {
    title: "Home",
    navigation: "/",
  },
  {
    title: "About",
    navigation: "/client/about",
  },
  {
    title: "Find Now",
    navigation: "/client/find-now",
  },
  {
    title: "Pricing",
    navigation: "/client/pricing",
  },
  {
    title: "Log out",
    navigation: "/authentication",
    onClick: () => setUserSignOut(),
  },
];
