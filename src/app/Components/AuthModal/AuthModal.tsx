"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validationMessages from "@/app/misc/validationMessages";
import { IAuthModalProps } from "@/app/types/types";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(validationMessages.authModal.login.emailInvalid)
    .required(validationMessages.authModal.login.emailRequired),
  password: yup
    .string()
    .required(validationMessages.authModal.login.passwordRequired),
});

const registerSchema = yup.object().shape({
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

export default function AuthModal({
  isOpen,
  onClose,
}: Readonly<IAuthModalProps>) {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const {
    register: loginRegister,
    handleSubmit: handleLogin,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    register: registerRegister,
    handleSubmit: handleRegister,
    formState: { errors: registerErrors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onLoginSubmit = (data: any) => console.log("Login:", data);
  const onRegisterSubmit = (data: any) => console.log("Register:", data);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-base-white p-4 rounded-lg shadow-lg w-96 relative">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className=" text-base-text  w-10 h-10 rounded-md hover:text-red-700 "
          >
            X
          </button>
        </div>
        <h2 className="text-center text-2xl font-bold text-base-title mb-4">
          {isLoginForm ? "Entrar com seu e-mail" : "Criar conta"}
        </h2>

        {isLoginForm ? (
          <form onSubmit={handleLogin(onLoginSubmit)} className="space-y-4">
            <input
              type="email"
              placeholder="E-mail"
              {...loginRegister("email")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {loginErrors.email?.message}
            </p>

            <input
              type="password"
              placeholder="Senha"
              {...loginRegister("password")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {loginErrors.password?.message}
            </p>

            <button
              type="submit"
              className="w-full bg-primary text-base-white py-2 rounded hover:bg-primary-dark"
            >
              ENTRAR
            </button>

            <p className="text-center text-base-text">
              Não tem uma conta?{" "}
              <button
                onClick={() => setIsLoginForm(false)}
                className="text-primary hover:text-primary-dark underline"
              >
                Registrar
              </button>
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleRegister(onRegisterSubmit)}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Nome Completo"
              {...registerRegister("name")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {registerErrors.name?.message}
            </p>

            <input
              type="text"
              placeholder="Telefone (DDD) 9XXXX-XXXX"
              {...registerRegister("phone")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {registerErrors.phone?.message}
            </p>

            <input
              type="email"
              placeholder="E-mail"
              {...registerRegister("email")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {registerErrors.email?.message}
            </p>

            <input
              type="password"
              placeholder="Senha"
              {...registerRegister("password")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {registerErrors.password?.message}
            </p>

            <input
              type="password"
              placeholder="Confirmar Senha"
              {...registerRegister("confirmPassword")}
              className="border px-3 py-2 rounded bg-base-input text-base-text placeholder-base-label w-full"
            />
            <p className="text-sm text-secondary-dark">
              {registerErrors.confirmPassword?.message}
            </p>

            <button
              type="submit"
              className="w-full bg-primary text-base-white py-2 rounded hover:bg-primary-dark"
            >
              REGISTRAR
            </button>

            <p className="text-center text-base-text">
              Já tem uma conta?{" "}
              <button
                onClick={() => setIsLoginForm(true)}
                className="text-primary hover:text-primary-dark underline"
              >
                Entrar
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
