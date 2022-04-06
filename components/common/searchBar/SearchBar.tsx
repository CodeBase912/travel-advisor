import React from "react";
import { useRouter } from "next/router";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
// Import MaterialUI Components
import { Box, Input, IconButton } from "@mui/material";
// Import Custom React Components
import { Icons } from "../icons";

const SearchBar = () => {
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log("Search submit data: ", data);

    if (router.pathname !== "search") {
      // Navigate to the places search page
      router.push({
        pathname: "search",
        query: {
          n: data.search,
        },
      });
    }
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
              value={value}
              placeholder={"Search for places to see"}
              disableUnderline
              className="w-full text-gray-600 mr-3"
              {...methods.register("search")}
              // onBlur={onBlur} // notify when input is touched
              // onChange={onChange} // send value to hook form
              // inputRef={ref}
            />
          )}
        />
        <IconButton
          type="submit"
          disableRipple
          className="bg-primary p-2 text-sm text-white active:bg-primary-dark"
        >
          {Icons.search}
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchBar;
