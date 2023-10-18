import { colors } from "../../../theme";

export const outerContainer = {
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
    borderColor: colors.darkGray,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
    borderColor: colors.purple,
  },
  "& .MuiInputBase-input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 100px white inset !important",
    WebkitTextFillColor: "inherit !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
    borderColor: colors.darkGray,
  },
  "& label": {
    color: colors.darkGray,
  },
  "& label.Mui-focused": {
    color: colors.purple,
  },
};
