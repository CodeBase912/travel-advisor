import type { NextPage } from "next";
import React, { FormEvent } from "react";
// Import Form Libraries
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// Import MaterialUI COmponents
import { Box } from "@mui/material";
import Header from "../components/site/header/Header";
import Footer from "../components/site/footer/Footer";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter a last name"),
    Image: yup
      .array()
      .min(1, "Please select atleast one image")
      .required("required"),
    TourGallery: yup
      .array()
      .min(1, "Please select atleast one image")
      .required("required"),
  })
  .required();

const TourGuideSIgnUp: NextPage = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      Image: [],
      TourGallery: [],
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("Submit data: ", data);
  };

  const formSubmit = async (e: FormEvent) => {
    methods.handleSubmit(onSubmit)(e);
  };

  return (
    <Box className="h-screen flex flex-col">
      <Header />
      <main className="pt-20 h-full">
        <FormProvider {...methods}>
          <form onSubmit={formSubmit}>become_a_tour_guide</form>
        </FormProvider>
      </main>
      <Footer />
    </Box>
  );
};

export default TourGuideSIgnUp;
