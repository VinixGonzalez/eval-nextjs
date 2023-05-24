"use client";
import {
  Password,
  CheckGreen,
  AlertRed,
  Eye,
} from "@/components/icons/ready-to-use";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { useNewPasswordForgotFormHelper } from "./NewPasswordForgotForm.helper";

export default function NewPasswordForgotForm({
  token,
  email,
}: {
  token: string | string[] | undefined;
  email: string | string[] | undefined;
}) {
  const {
    showConfirmPassword,
    showPassword,
    dirtyFields,
    errors,
    isValid,
    loading,
    trigger,
    handleSubmit,
    register,
    setShowConfirmPassword,
    setShowPassword,
    handleChangePassword,
  } = useNewPasswordForgotFormHelper({ token, email });

  return (
    <div className="bg-lightPurple p-12 max-w-md rounded-xl">
      <div className="mb-10">
        <h1 className="mb-5 text-xl text-black font-semibold">
          Recuperar password
        </h1>
        <p className="text-xs">
          Se está nesta página é porque pediu para alterar a sua password atual
          no software EVAL.
          <br /> Por favor crie uma nova password e confirme o seu pedido.
        </p>
      </div>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <div className="mb-7">
          <InputGroup className="flex items-center">
            <InputLeftElement pointerEvents="none">
              <Password />
            </InputLeftElement>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Nova password *"
              className={`relative bg-white ${
                dirtyFields.password && !errors.password
                  ? "border-green"
                  : "border-black"
              } ${errors.password && "border-red-600"}`}
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
              {errors.password && <AlertRed className="absolute right-11" />}
              <Eye />
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-7">
          <InputGroup className="flex items-center">
            <InputLeftElement pointerEvents="none">
              <Password />
            </InputLeftElement>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Repita a nova password *"
              className={`relative bg-white ${
                dirtyFields.confirmPassword &&
                !errors.confirmPassword &&
                isValid
                  ? "border-green"
                  : "border-black"
              } ${errors.confirmPassword && "border-red-600"}`}
              {...register("confirmPassword")}
            />
            <InputRightElement
              title={showConfirmPassword ? "Esconder senha" : "Mostrar senha"}
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword((oldValue) => !oldValue)}
            >
              {dirtyFields.confirmPassword && !errors.confirmPassword && (
                <CheckGreen className="absolute right-11" />
              )}
              {errors.confirmPassword && (
                <AlertRed className="absolute right-11" />
              )}
              <Eye />
            </InputRightElement>
          </InputGroup>
          {errors.confirmPassword && (
            <span className="text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <p className="text-red-600 text-xs">
          A password tem de ter no mínimo 8 caracteres, 1 letra maiúscula, 1
          letra minúscula, 1 número e pelo menos 1 caracter especial
          (!”#$%&*-+/)
        </p>

        <button className="mt-11 py-3 px-5 bg-purple text-white rounded-4xl self-end">
          {loading ? "Aguarde..." : "Recuperar password"}
        </button>
      </form>

      {/* <strong>{token}</strong> */}
    </div>
  );
}
