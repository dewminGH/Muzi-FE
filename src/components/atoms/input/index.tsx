import * as styles from "./styles";
import TextField from "@mui/material/TextField";
import { IStyledInput } from "./types/interface";
import { inputVariants } from "./types/enum";

const StyledInput: React.FC<IStyledInput> = ({ type, label, onclick }) => {
  const styleSelector = () => {
    switch (type) {
      case inputVariants.PRIMARY:
        return styles.primaryStyle;
      case inputVariants.PASSWORD_PRIMARY:
        return styles.primaryStyle;
    }
  };
  return (
    <TextField
      id="outlined-search"
      label={label}
      type={type === inputVariants.PASSWORD_PRIMARY ? "password" : "search"}
      onClick={onclick}
      sx={{
        ...styleSelector(),
        "& input": {
          color: "#F7F8F8 !important",
        },
      }}
    />
  );
};

export default StyledInput;
