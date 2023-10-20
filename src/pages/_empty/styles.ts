import { SxProps } from "@mui/material";
import { background, colors, gaps } from "../../theme";

export const otterContainer: SxProps = {
  height: "100vh",
  background: background.primary,
  padding: { xs: "24px", md: "80px" },
};

export const innerContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
};

export const version: SxProps = {
  color: colors.primary,
  fontSize: { xs: "28px", md: "56px" },
  mb: gaps.large,
};

export const content: SxProps = {
  color: colors.primary,
  fontSize: { xs: "20px", md: "32px" },
  mb: gaps.large,
};
