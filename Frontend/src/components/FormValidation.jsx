import React from "react";
import * as yup from "yup";

export const FormValidation = () => {};

export const userSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  address: yup.string().required(),
});
