import { background, colors, height, width } from "../../../theme";
import { SxProps } from "@mui/material";

export const primaryStyle: SxProps = {
  background: background.secondary,
  width: { xs: width.primaryWidthButtonXs, sm: width.primaryWidthButtonSm, md: width.primaryWidthButton },
  height: height.primaryHeightButton,
  color: colors.primary,
};
