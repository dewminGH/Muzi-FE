import { containedButtonVariants } from "./enum";

export interface IStyledContainedButton {
  type: containedButtonVariants;
  text: string;
  onClick?: () => void;
}
