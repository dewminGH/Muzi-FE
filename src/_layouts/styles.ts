import { SxProps } from "@mui/material";
import { colors, fontSize, textDecorationNormal } from "../theme";
import { drawerWidth } from "./config";

export const navContainer: SxProps = {
  width: "100%",
  height: { xs: "20px", md: "30px" },
  display: "flex",
  justifyContent: "space-between",
  color: colors.primary,
};

export const navBasicItem: SxProps = {
  fontSize: `${fontSize.sn} !important`,
  cursor: "pointer",
  color: colors.primary,
  ":hover": textDecorationNormal,
};

export const navOuterContainer: SxProps = {
  display: "flex",
  "& .MuiAppBar-root": {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    overflowX: "hidden",
  },
  "& .MuiToolbar-gutters": {
    p: "0 !important",
  },
};

export const textAlign: SxProps = {
  textAlign: "center",
};

export const marginTitle: SxProps = {
  my: 2,
};

export const avatar: SxProps = {
  width: 40,
  height: "fit-content",
  marginRight: "12px",
};

export const drawer: SxProps = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
  },
};

export const navItem: SxProps = {
  display: {
    xs: "none",
    sm: "block",
  },
};

export const logoContainer: SxProps = {
  flexGrow: 1,
  display: {
    xs: "none",
    sm: "flex",
  },
  alignItems: {
    sm: "center",
  },
};

export const iconButton: SxProps = {
  mr: 2,
  display: {
    sm: "none",
  },
};

export const appBar: SxProps = {
  mb: "32px",
};
