import type { NextPage } from "next";
import React, { FormEvent } from "react";
// Import Form Libraries
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// Import MaterialUI COmponents
import { Box } from "@mui/material";
import Header from "../components/site/header/Header";

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Please enter a username"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter a your password"),
    confirm_password: yup
      .string()
      .test("match", "Passwords do not match", (value, context) => {
        if (value && value !== context.parent.password) {
          return false;
        }
        return true;
      })
      .required("Please confirm your password"),
  })
  .required();

const Login: NextPage = () => {
  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (e: FormEvent) => {};

  return (
    <Box>
      <Header />
      <Box className="mt-20">
        become_a_tour_guide
        <form></form>
      </Box>
    </Box>
  );
};

export default Login;
