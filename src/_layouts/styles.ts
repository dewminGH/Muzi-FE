import { SxProps } from "@mui/material";
import { colors, fontSize, fontWeight, textDecorationNormal } from "../theme";
import { drawerWidth } from "./config";

/* top navigation bar */
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

/* footer  */
export const footerContainer: SxProps = {
  display: "flex",
  marginX: {
    xs: "24px",
    md: "80px",
  },
  justifyContent: "space-between",
  height: "100%",
  flexDirection: "row",
};

export const copyWrite: SxProps = {
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
};

export const footerTitle: SxProps = {
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  fontWeight: fontWeight.bold,
};

export const footerOuterContainer: SxProps = {
  position: "absolute",
  width: "100vw",
  height: "65px",
  bottom: 0,
  borderTop: `solid 5px ${colors.darkGray}`,
  color: colors.primary,
};
