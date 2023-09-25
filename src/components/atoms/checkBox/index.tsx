import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IStyledCheckBox } from "./types/interface";
import { checkBoxVariants } from "./types/enum";
import { colors } from "../../../theme";

const StyledCheckBox: React.FC<IStyledCheckBox> = ({ type, onChange }) => {
  const styleSelector = () => {
    switch (type) {
      case checkBoxVariants.FAVORITE_PURPLE:
        return [<FavoriteBorder sx={{ color: colors.blue }} />, <Favorite sx={{ color: colors.purple }} />];
      default:
        return [<CheckBoxOutlineBlankIcon />, <CheckBoxOutlinedIcon />];
    }
  };

  return <Checkbox icon={styleSelector()[0]} checkedIcon={styleSelector()[1]} onChange={onChange} />;
};

export default StyledCheckBox;
