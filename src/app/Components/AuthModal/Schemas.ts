"use client";

import * as yup from "yup";
import validationMessages from "@/app/misc/validationMessages";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(validationMessages.authModal.login.emailInvalid)
    .required(validationMessages.authModal.login.emailRequired),
  password: yup
    .string()
    .required(validationMessages.authModal.login.passwordRequired),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required(validationMessages.authModal.register.nameRequired),
  phone: yup
    .string()
    .required(validationMessages.authModal.register.phoneInvalid),
  email: yup
    .string()
    .email(validationMessages.authModal.register.emailInvalid)
    .required(validationMessages.authModal.register.emailRequired),
  password: yup
    .string()
    .min(8, validationMessages.authModal.register.passwordMin)
    .required(validationMessages.authModal.register.passwordRequired),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      validationMessages.authModal.register.passwordMismatch
    )
    .required(validationMessages.authModal.register.passwordRequired),
});
