import * as styles from "./styles";
import { Button } from "@mui/material";
import { containedButtonVariants } from "./types/enum";
import { IStyledContainedButton } from "./types/interface";

const StyledContainedButton: React.FC<IStyledContainedButton> = ({ text, type, onClick }) => {
  const styleSelector = () => {
    switch (type) {
      case containedButtonVariants.PRIMARY:
        return styles.primaryStyle;
      case containedButtonVariants.SEARCH:
        return styles.searchStyle;
    }
  };
  return (
    <Button variant="contained" sx={styleSelector()} onClick={onClick}>
      {text}
    </Button>
  );
};

export default StyledContainedButton;
