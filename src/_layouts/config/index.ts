import { setUserSignOut } from "../../_data/localStorage";

export const drawerWidth = 240;
export const navItems = [
  {
    title: "Home",
    navigation: "/",
  },
  {
    title: "About",
    navigation: "/client/about/We are the best music collaborating platform",
  },
  {
    title: "Find Now",
    navigation: "/client/find-now",
  },
  {
    title: "Pricing",
    navigation: "/client/pricing/You are using free tire",
  },
  {
    title: "Log out",
    navigation: "/authentication",
    onClick: () => setUserSignOut(),
  },
];
