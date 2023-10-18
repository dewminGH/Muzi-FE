import * as React from "react";
import * as SelectorConfig from "./config";
import * as styles from "./styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { IStyledMultipleSelect } from "./types/interface";

const StyledMultipleSelect: React.FC<IStyledMultipleSelect> = ({
  label,
  optionsList,
  styles: customStyles,
  selectedOptions,
}) => {
  const [selectedOptionsList, setSelectedOptionsList] = React.useState<string[]>([]);

  useEffect(() => {
    selectedOptions(selectedOptionsList);
    // eslint-disable-next-line
  }, [selectedOptionsList]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptionsList>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptionsList(
      /* On autofill we get a stringified value. */
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <Box
      sx={{
        ...customStyles,
        ...styles.outerContainer,
      }}
    >
      <FormControl
        sx={{
          width: "100%",
          minWidth: "300px",
        }}
      >
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedOptionsList}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={selected => selected.join(", ")}
          MenuProps={SelectorConfig.MenuProps}
        >
          {optionsList.map(option => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selectedOptionsList.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default StyledMultipleSelect;
