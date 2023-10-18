import { InputBaseComponentProps, SxProps } from "@mui/material";
import { inputVariants } from "./enum";

export interface IStyledInput {
  type: inputVariants;
  autoComplete?: boolean;
  label?: string;
  inputRef?: React.Ref<unknown>;
  value?: unknown;
  inputProps?: InputBaseComponentProps;
  style?: SxProps;
  onClick?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}
