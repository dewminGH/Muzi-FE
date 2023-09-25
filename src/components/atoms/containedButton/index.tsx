import * as styles from "./styles";
import { Button } from "@mui/material";
import { containedButtonVariants } from "./types/enum";
import { IStyledContainedButton } from "./types/interface";

const StyledContainedButton: React.FC<IStyledContainedButton> = ({ text, type }) => {
  const styleSelector = () => {
    switch (type) {
      case containedButtonVariants.PRIMARY:
        return styles.primaryStyle;
    }
  };
  return (
    <Button variant="contained" sx={styleSelector()}>
      {text}
    </Button>
  );
};

export default StyledContainedButton;
