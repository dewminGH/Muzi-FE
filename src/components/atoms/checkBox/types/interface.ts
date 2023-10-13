import { checkBoxVariants } from "./enum";

export interface IStyledCheckBox {
  type?: checkBoxVariants;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
}
