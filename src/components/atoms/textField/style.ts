import { SxProps } from "@mui/material";
import { background, colors, fontSize, fontWeight, textDecorationThin } from "../../../theme";

export const headerMd: SxProps = {
  color: colors.primary,
  fontSize: { sm: fontSize.sm, md: fontSize.md },
  fontWeight: fontWeight.thick,
  display: "flex",
  alignItems: "center",
};

export const headerSm: SxProps = {
  color: colors.primary,
  fontSize: { sm: fontSize.sm, md: fontSize.sm },
  fontWeight: fontWeight.semiBold,
  display: "flex",
  alignItems: "center",
};

export const floatHeaderMd: SxProps = {
  zIndex: 100,
  fontSize: { xs: fontSize.sm, md: fontSize.md },
  fontWeight: fontWeight.thick,
  color: colors.primary,
  display: "flex",
  alignItems: "center",
};

export const basicTextMd: SxProps = {
  color: colors.primary,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.normal,
  display: "flex",
  alignItems: "center",
};

export const gradientTextMd: SxProps = {
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semiBold,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  background: background.secondary,
  "-webkit-text-fill-color": "transparent",
  "-webkit-background-clip": "text",
  "background-clip": "text",
};

export const activeText: SxProps = {
  "&:hover": textDecorationThin,
};
