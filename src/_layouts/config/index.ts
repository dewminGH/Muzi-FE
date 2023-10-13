import { setUserSignOut } from "../../_data/localStorage";

export const drawerWidth = 240;
export const navItems = [
  {
    title: "Home",
    navigation: "/",
  },
  {
    title: "About",
    navigation: "/about",
  },
  {
    title: "Find Now",
    navigation: "/find-now",
  },
  {
    title: "Pricing",
    navigation: "/pricing",
  },
  {
    title: "Log out",
    navigation: "/authentication",
    onClick: () => setUserSignOut(),
  },
];
