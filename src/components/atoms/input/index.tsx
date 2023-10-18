import * as styles from "./styles";
import TextField from "@mui/material/TextField";
import { IStyledInput } from "./types/interface";
import { inputVariants } from "./types/enum";
import { colors } from "../../../theme";

const StyledInput: React.FC<IStyledInput> = ({
  type,
  autoComplete,
  label,
  value,
  inputRef,
  inputProps,
  style,
  onKeyDown,
  onClick,
  onChange,
}) => {
  const styleSelector = () => {
    switch (type) {
      case inputVariants.PRIMARY:
        return styles.primaryStyle;
      case inputVariants.PASSWORD_PRIMARY:
        return styles.primaryStyle;
      case inputVariants.SHORT_INPUT:
        return { ...styles.primaryStyle, ...styles.shortInputStyle };
    }
  };
  return (
    <TextField
      autoComplete={autoComplete ? "on" : "off"}
      label={label}
      value={value}
      inputRef={inputRef}
      type={type === inputVariants.PASSWORD_PRIMARY ? "password" : "search"}
      onClick={onClick}
      onChange={onChange}
      onKeyDown={onKeyDown}
      sx={{
        ...styleSelector(),
        "& input": {
          color: `${colors.primary} !important`,
        },
        ...style,
      }}
      inputProps={inputProps}
    />
  );
};

export default StyledInput;
