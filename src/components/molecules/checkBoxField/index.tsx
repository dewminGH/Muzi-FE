import * as styles from "./styles";
import StyledCheckBox from "../../atoms/checkBox";
import StyledTextField from "../../atoms/textField";
import { Box } from "@mui/material";
import { ICheckBoxField } from "./types/interface";
import { checkBoxVariants } from "../../atoms/checkBox/types/enum";
import { textFieldVariants } from "../../atoms/textField/types/enum";
import { checkBoxFieldVariants } from "./types/enum";

const StyledCheckBoxField: React.FC<ICheckBoxField> = ({ text, type }) => {
  switch (type) {
    case checkBoxFieldVariants.FAVORITE_PRIMARY:
      return (
        <Box sx={styles.fieldContainer}>
          <StyledCheckBox type={checkBoxVariants.FAVORITE_PURPLE} />
          <StyledTextField text={text} type={textFieldVariants.BASIC_TEXT_MD} />
        </Box>
      );
    default:
      return <Box />;
  }
};

export default StyledCheckBoxField;
