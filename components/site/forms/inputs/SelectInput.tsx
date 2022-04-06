import React from "react";
import classNames from "classnames";
// Import MaterialUI Components
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type Props = {
  name?: string;
  label: string;
  options: {
    value: string;
    displayText: string;
  }[];
  value: any;
  defaultValue?: any;
  container_className?: string;
  className?: string;
  option_className?: string;
  onChange?: (data?: any) => void;
};

const SelectInput: React.FC<Props> = ({
  name = "",
  label,
  options,
  value,
  defaultValue,
  container_className = "",
  className = "",
  option_className = "",
  onChange = () => {},
}) => {
  return (
    <FormControl
      className={classNames("w-full text-left", container_className)}
    >
      <InputLabel htmlFor="select-input" color="secondary">
        {label}
      </InputLabel>
      <Select
        id="select-input"
        label={label}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        sx={{
          ".MuiSelect-icon": {
            fill: "#FFF",
            background: "#FF385C",
            borderRadius: "100%",
            right: "0.5rem",
          },
          ".MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "0.5rem 0.8rem",
          },
        }}
        className={classNames(
          "w-full rounded-full my-0 py-0",
          container_className
        )}
        color="primary"
      >
        {options &&
          options.map((option, ind) => {
            // return <>option</>;
            return (
              <MenuItem
                key={`select-input-${name}-menu-item-${ind}`}
                value={option.value}
                className={classNames("", option_className)}
                color="secondary"
              >
                {option.displayText}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
