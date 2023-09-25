import * as styles from "./style";
import { Typography } from "@mui/material";
import { IStyledTextField } from "./types/interface";
import { textFieldVariants } from "./types/enum";

const StyledTextField: React.FC<IStyledTextField> = ({ text, type, onClick }) => {
  const styleSelector = () => {
    switch (type) {
      case textFieldVariants.HEADER_MD:
        return styles.headerMd;
      case textFieldVariants.BASIC_TEXT_MD:
        return styles.basicTextMd;
      case textFieldVariants.GRADIENT_TEXT_MD:
        return styles.gradientTextMd;
    }
  };

  return (
    <Typography
      component="div"
      sx={onClick ? { ...styleSelector(), ...(styles.activeText as object) } : styleSelector()}
      onClick={onClick}
    >
      {text}
    </Typography>
  );
};

export default StyledTextField;
