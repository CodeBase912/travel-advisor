import React from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
// Import MaterialUI Components
import { Box, Input, Button } from "@mui/material";
// Import Custom React Components
import { Icons } from "../icons";

const SearchBar = () => {
  const methods = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log("Search submit data: ", data);
  };

  return (
    <Box className="border border-gray-400 py-1 pl-3 pr-1 rounded-full w-full md:max-w-sm">
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex items-center"
      >
        <Controller
          control={methods.control}
          name="search"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <Input
              //   defaultValue=""
              value={value}
              placeholder={"Search for places to see"}
              disableUnderline
              sx={{
                color: "gray",
              }}
              className="w-full"
              {...methods.register("search")}
              // onBlur={onBlur} // notify when input is touched
              // onChange={onChange} // send value to hook form
              // inputRef={ref}
            />
          )}
        />
        <Button
          type="submit"
          sx={{
            height: "30px",
            width: "30px",
            minWidth: "0px",
            padding: "0.62rem",
            borderRadius: "100%",
          }}
          className="text-white flex items-center justify-center bg-primary rounded-full"
          variant="contained"
        >
          {Icons.search}
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;
