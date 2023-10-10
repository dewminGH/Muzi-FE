import { SxProps } from "@mui/material";
import { background, gaps } from "../../theme";

export const otpOuterContainer: SxProps = {
  background: background.primary,
  height: "100vh",
  display: "flex",
  flexDirection: { xs: "column", md: "row-reverse" },
  overflow: { md: "hidden" },
};

export const coverImageContainer: SxProps = {
  flex: 1 / 2,
  height: { xs: "300px", md: "100%" },
  width: { xs: "100%", md: "auto" },
};

export const image: object = {
  height: "100%",
  width: "100%",
  display: "block",
};

export const pageContentContainer: SxProps = {
  flex: 1 / 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const pageInnerContainer: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
};

export const otpTextContainer: SxProps = {
  display: "flex",
  marginY: "40px",
  gap: gaps.small,
};
