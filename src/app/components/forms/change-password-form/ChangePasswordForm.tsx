"use client";
import React from "react";

import {
  Password,
  CheckGreen,
  AlertRed,
  Eye,
  EyeClosed,
} from "@/app/components/icons/ready-to-use";

import { useChangePasswordFormHelper } from "./ChangePasswordForm.helper";
import { Button } from "@/app/components/button/Button";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";

interface ChangePasswordFormProps {
  closeModal: () => void;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  closeModal,
}) => {
  const {
    handleSubmit,
    register,
    trigger,
    setShowPassword,
    setShowConfirmPassword,
    handleChangePassword,
    isLoading,
    showPassword,
    showConfirmPassword,
    dirtyFields,
    errors,
    isValid,
  } = useChangePasswordFormHelper({ closeModal });

  return (
    <form
      onSubmit={handleSubmit(handleChangePassword)}
      className="mt-8 flex flex-col"
    >
      <div className="mb-7">
        <InputGroup className="flex items-center">
          <Input
            id="oldPassword"
            type="password"
            placeholder="Password atual *"
            className={`relative bg-white ${
              dirtyFields.oldPassword && !errors.oldPassword
                ? "border-green"
                : "border-black"
            } ${errors.oldPassword && "border-red"}`}
            {...register("oldPassword")}
          />
          {errors.oldPassword && <AlertRed className="absolute right-4" />}
        </InputGroup>
        {errors.oldPassword && (
          <span className="text-red">{errors.oldPassword.message}</span>
        )}
      </div>

      <div className="mb-7">
        <InputGroup className="flex items-center">
          <InputLeftElement pointerEvents="none">
            <Password />
          </InputLeftElement>
          <Input
            id="newPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Nova password *"
            className={`relative bg-white ${
              dirtyFields.newPassword && !errors.newPassword
                ? "border-green"
                : "border-black"
            } ${errors.newPassword && "border-red"}`}
            {...register("newPassword")}
          />
          <InputRightElement
            title={showPassword ? "Esconder senha" : "Mostrar senha"}
            className="cursor-pointer"
            onClick={() => setShowPassword((oldValue) => !oldValue)}
          >
            {dirtyFields.newPassword && !errors.newPassword && (
              <CheckGreen className="absolute right-11" />
            )}
            {errors.newPassword && <AlertRed className="absolute right-11" />}
            {showPassword ? <EyeClosed /> : <Eye />}
          </InputRightElement>
        </InputGroup>
        {errors.newPassword && (
          <span className="text-red">{errors.newPassword.message}</span>
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
              dirtyFields.confirmPassword && !errors.confirmPassword && isValid
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
            {showConfirmPassword ? <EyeClosed /> : <Eye />}
          </InputRightElement>
        </InputGroup>
        {errors.confirmPassword && (
          <span className="text-red">{errors.confirmPassword.message}</span>
        )}
      </div>

      <p className="text-red text-xs">
        A password tem de ter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra
        minúscula, 1 número e pelo menos 1 caractere especial (!”#$%&*-+/)
      </p>

      <Button
        isLoading={isLoading}
        loadingText="Alterar password"
        spinnerPlacement="end"
        className="my-11 self-end py-3 px-5 bg-purple text-white text-xs font-semibold rounded-4xl hover:bg-black"
        rightIcon={<Password height="12" width="12" />}
        type="submit"
      >
        Alterar password
      </Button>
    </form>
  );
};
