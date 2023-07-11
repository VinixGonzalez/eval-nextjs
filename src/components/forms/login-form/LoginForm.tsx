"use client";

import {
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import {
  AlertRed,
  CheckGreen,
  Email,
  Eye,
  EyeClosed,
  Password,
} from "@/components/icons/ready-to-use";
import { useLoginFormHelper } from "./LoginForm.helper";

export const LoginForm: React.FC = () => {
  const {
    errors,
    showPassword,
    dirtyFields,
    isValid,
    isLoading,
    hasErrorWithCredentials,
    setShowPassword,
    handleLogin,
    handleSubmit,
    register,
    trigger,
  } = useLoginFormHelper();

  const emailRegister = register("email");
  const { onBlur, ...emailProps } = emailRegister;

  return (
    <>
      {/* {hasErrorWithCredentials && (
        <div className="flex items-center justify-center">
          <span className="text-lg text-red font-semibold">
            Email ou senha inválidos.
          </span>
        </div>
      )} */}
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col gap-6">
          <Stack>
            <label className="font-bold text-xs" htmlFor="email">
              Email <strong className="text-red">*</strong>
            </label>
            <InputGroup className="flex items-center">
              <InputLeftElement pointerEvents="none">
                <Email width="24" height="18" viewBox="0 0 24 18" />
              </InputLeftElement>
              <Input
                id="email"
                type="email"
                placeholder="O seu email"
                onBlur={(e) => {
                  onBlur(e);
                  trigger("email");
                }}
                {...emailProps}
                className={`${
                  dirtyFields.email && !errors.email
                    ? "border-green"
                    : "border-black"
                } ${(errors.email || hasErrorWithCredentials) && "border-red"}`}
              />
              {dirtyFields.email && !errors.email && (
                <InputRightElement>
                  <CheckGreen />
                </InputRightElement>
              )}
              {(errors.email || hasErrorWithCredentials) && (
                <InputRightElement>
                  <AlertRed />
                </InputRightElement>
              )}
            </InputGroup>
            {errors.email && (
              <span className="text-red">{errors.email.message}</span>
            )}
          </Stack>
          <Stack>
            <label className="font-bold text-xs" htmlFor="password">
              Password <strong className="text-red">*</strong>
            </label>
            <InputGroup className="flex items-center">
              <InputLeftElement pointerEvents="none">
                <Password />
              </InputLeftElement>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="A sua password"
                className={`relative ${
                  dirtyFields.password && !errors.password
                    ? "border-green"
                    : "border-black"
                } ${
                  (errors.password || hasErrorWithCredentials) && "border-red"
                }`}
                {...register("password")}
              />
              <InputRightElement
                title={showPassword ? "Esconder senha" : "Mostrar senha"}
                className="cursor-pointer"
                onClick={() => setShowPassword((oldValue) => !oldValue)}
              >
                {dirtyFields.password && !errors.password && (
                  <CheckGreen className="absolute right-11" />
                )}
                {(errors.password || hasErrorWithCredentials) && (
                  <AlertRed className="absolute right-11" />
                )}
                {showPassword ? <EyeClosed /> : <Eye />}
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <span className="text-red">{errors.password.message}</span>
            )}
          </Stack>

          <div>
            <Link
              className="text-xs text-darkGrey"
              href="/login/forgot-password"
            >
              Esqueceu-se da palavra password?
            </Link>
          </div>

          {/* <button className="mt-4 w-32 p-4 bg-purple text-white rounded-4xl self-center">
            Entrar
          </button> */}
          <Button
            isLoading={isLoading}
            loadingText="Aguarde"
            spinnerPlacement="end"
            className="bg-purple w-32 text-white text-xs font-semibold rounded-4xl self-center hover:bg-black"
            rightIcon={<Password height="12" width="12" />}
            type="submit"
          >
            Entrar
          </Button>
        </div>
      </form>
    </>
  );
};
