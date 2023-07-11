import React from "react";
import {
  Password,
  CheckGreen,
  AlertRed,
  Eye,
  EyeClosed,
} from "@/components/icons/ready-to-use";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { useChangePasswordFormHelper } from "./ChangePasswordForm.helper";

export const ChangePasswordForm: React.FC = () => {
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
  } = useChangePasswordFormHelper();

  return (
    <form
      onSubmit={handleSubmit(handleChangePassword)}
      className="mt-8 flex flex-col"
    >
      <div className="mb-7">
        <InputGroup className="flex items-center">
          <Input
            id="currentPassword"
            type="password"
            placeholder="Password atual *"
            className={`relative bg-white ${
              dirtyFields.currentPassword && !errors.currentPassword
                ? "border-green"
                : "border-black"
            } ${errors.currentPassword && "border-red"}`}
            {...register("currentPassword")}
          />
          {errors.currentPassword && <AlertRed className="absolute right-4" />}
        </InputGroup>
        {errors.currentPassword && (
          <span className="text-red">{errors.currentPassword.message}</span>
        )}
      </div>

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
            {showPassword ? <EyeClosed /> : <Eye />}
          </InputRightElement>
        </InputGroup>
        {errors.password && (
          <span className="text-red">{errors.password.message}</span>
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
        minúscula, 1 número e pelo menos 1 caracter especial (!”#$%&*-+/)
      </p>

      <Button
        isLoading={isLoading}
        loadingText="Aguarde"
        spinnerPlacement="end"
        className="my-11 self-end py-3 px-5 bg-purple text-white text-xs font-semibold rounded-4xl hover:bg-black"
        rightIcon={<Password height="12" width="12" />}
        type="submit"
      >
        Pedir password
      </Button>
    </form>
  );
};
