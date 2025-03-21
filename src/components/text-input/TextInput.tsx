import { FC } from "react";
import { TextInputProps } from "./@types/text-input.type";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

const TextInput: FC<TextInputProps> = ({
  name,
  rules,
  label,
  type,
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name || ""}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant="standard"
          {...props}
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error ? error.message : ""}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          sx={{
            borderColor: "#fff",
          }}
        />
      )}
    />
  );
};

export default TextInput;
