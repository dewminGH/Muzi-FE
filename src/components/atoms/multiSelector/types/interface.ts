import { SxProps } from "@mui/material";

export interface IStyledMultipleSelect {
  label: string;
  optionsList: string[];
  selectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  styles?: SxProps;
}
