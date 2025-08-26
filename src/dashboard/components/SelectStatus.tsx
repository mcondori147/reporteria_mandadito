import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

function SelectStatus() {
      const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Estatus"
          onChange={handleChange}
        >
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={2}>200</MenuItem>
          <MenuItem value={3}>400</MenuItem>
          <MenuItem value={4}>500</MenuItem>
        </Select>
      </FormControl>
    );
}

export default SelectStatus;