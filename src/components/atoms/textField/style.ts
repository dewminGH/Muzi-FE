import { SxProps } from "@mui/material";
import { background, colors, fontSize, fontWeight } from "../../../theme";

export const headerMd: SxProps = {
  color: colors.primary,
  fontSize: { sm: fontSize.sm, md: fontSize.md },
  fontWeight: fontWeight.thick,
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
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: colors.primary,
    textDecorationThickness: "1px",
    textUnderlineOffset: "5px",
    textDecorationStyle: "wavy",
    cursor: "pointer",
  },
};
