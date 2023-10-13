import { SxProps } from "@mui/material";
import { background, colors } from "../../theme";

export const loginContainer: SxProps = {
  background: background.primary,
  height: "100vh",
  color: colors.primary,
};

export const logicCoverImage = {
  height: "100%",
  maxWidth: "100vw",
  position: "absolute",
  pointerEvents: "none",
};

export const loginItemContainer: SxProps = {
  display: "flex",
};

export const imageContainer: SxProps = {
  flex: 1,
  "@media (max-width: 1280px)": {
    opacity: 0.2,
  },
};

export const contentContainer: SxProps = {
  flex: 1,
  height: "100vh",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  "@media (max-width: 770px)": {
    width: "100vw",
    marginRight: "20px",
  },
};

export const buttonsContainer: SxProps = {
  marginTop: "40px",
  gap: "16px",
  display: "flex",
  flexDirection: "column",
};

export const avatar: SxProps = {
  width: 80,
  height: "fit-content",
  marginRight: "24px",
};

export const innerContentContainer: SxProps = {
  display: "flex",
};
