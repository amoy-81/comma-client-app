import React from "react";
import {
  Select as MUISelect,
  MenuItem,
  FormControl,
  InputLabel,
  SelectProps as MUISelectProps,
  SelectChangeEvent,
} from "@mui/material";

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = Omit<MUISelectProps, "onChange"> & {
  value?: string | number;
  options: Option[];
  onChange?: (value: string | number) => void;
  label?: string;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({
  value,
  options,
  onChange,
  label,
  disabled,
}) => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange?.(event.target.value as string | number);
  };

  return (
    <FormControl fullWidth disabled={disabled}>
      {label && <InputLabel>{label}</InputLabel>}
      <MUISelect value={value} onChange={handleChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
