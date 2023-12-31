import { SxProps } from "@mui/material";
import { textFieldVariants } from "./enum";

export interface IStyledTextField {
  type: textFieldVariants;
  text: string;
  onClick?: () => void;
  styles?: SxProps;
}
