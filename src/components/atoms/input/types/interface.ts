import { inputVariants } from "./enum";

export interface IStyledInput {
  type: inputVariants;
  label: string;
  onclick?: () => void;
}
