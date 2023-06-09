"use client";

import React from "react";
import {
  Password,
  CheckGreen,
  AlertRed,
  Eye,
} from "@/app/components/icons/ready-to-use";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
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
    <>
      <div className="bg-lightPurple p-12 max-w-md rounded-xl">
        <div className="mb-10">
          <h1 className="mb-5 text-xl text-black font-semibold">
            Recuperar password
          </h1>
          <p className="text-xs">
            Se está nesta página é porque pediu para alterar a sua password
            atual no software EVAL.
            <br /> Por favor crie uma nova password e confirme o seu pedido.
          </p>
        </div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(handleChangePassword)}
        >
          <div className="mb-7">
            <InputGroup className="flex items-center bg-white rounded">
              <InputLeftElement pointerEvents="none">
                <Password />
              </InputLeftElement>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Nova password *"
                className={`relative ${
                  dirtyFields.password && !errors.password
                    ? "border-green"
                    : "border-black"
                } ${errors.password && "border-red"}`}
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
              <span className="text-red">{errors.password.message}</span>
            )}
          </div>
          <div className="mb-7">
            <InputGroup className="flex items-center bg-white rounded">
              <InputLeftElement pointerEvents="none">
                <Password />
              </InputLeftElement>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Repita a nova password *"
                className={`relative ${
                  dirtyFields.confirmPassword &&
                  !errors.confirmPassword &&
                  isValid
                    ? "border-green"
                    : "border-black"
                } ${errors.confirmPassword && "border-red"}`}
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
              <span className="text-red">{errors.confirmPassword.message}</span>
            )}
          </div>

          <p className="text-red text-xs">
            A password tem de ter no mínimo 8 caracteres, 1 letra maiúscula, 1
            letra minúscula, 1 número e pelo menos 1 caractere especial
            (!”#$%&*-+/)
          </p>

          <Button
            isLoading={loading}
            loadingText="Recuperar password"
            spinnerPlacement="end"
            className="bg-purple text-white text-xs font-semibold rounded-4xl mt-6 self-center hover:bg-black"
            rightIcon={<Password height="12" width="12" />}
            type="submit"
          >
            Recuperar password
          </Button>
        </form>
      </div>
    </>
  );
}
