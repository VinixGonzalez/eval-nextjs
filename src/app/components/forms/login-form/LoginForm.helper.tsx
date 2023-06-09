"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { toastComponent } from "@/app/components/toast/Toast";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("Formato de e-mail inválido.")
    .toLowerCase(),
  password: z.string().nonempty("A senha é obrigatória."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginFormHelper = (router: AppRouterInstance) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasErrorWithCredentials, setHasErrorWithCredentials] = useState(false);

  // useEffect(() => {
  //   const searchParams = window.location.search;

  //   const hasError =
  //     searchParams.includes(ErrorStatusCodesEnum.WrongCredentials) ||
  //     searchParams.includes(ErrorStatusCodesEnum.UserBlockedManyLoginTries) ||
  //     searchParams.includes(ErrorStatusCodesEnum.UserNotFoundByEmail) ||
  //     searchParams.includes(ErrorStatusCodesEnum.MinCharPassword);
  //   if (hasError) {
  //     setHasErrorWithCredentials(true);

  //     if (searchParams.includes(ErrorStatusCodesEnum.WrongCredentials)) {
  //       toastComponent({
  //         msg: "Usuário ou senha estão incorretos.",
  //         type: "error",
  //         align: "horizontal",
  //       });
  //     }
  //     if (
  //       searchParams.includes(ErrorStatusCodesEnum.UserBlockedManyLoginTries)
  //     ) {
  //       toastComponent({
  //         msg: "Usuário bloqueado temporariamente por tentativas inválidas.",
  //         type: "error",
  //       });
  //     }
  //     if (searchParams.includes(ErrorStatusCodesEnum.UserNotFoundByEmail)) {
  //       toastComponent({
  //         msg: "Não foi possível localizar o Usuário pelo E-mail informado.",
  //         type: "error",
  //       });
  //     }
  //     if (searchParams.includes(ErrorStatusCodesEnum.MinCharPassword)) {
  //       toastComponent({
  //         msg: "O valor mínimo permitido no campo Palavra-passe é de 8 caracteres.",
  //         type: "error",
  //       });
  //     }
  //   }
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (form: LoginFormData) => {
    setIsLoading(true);
    const signInResponse = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    setIsLoading(false);

    if (signInResponse && signInResponse.error) {
      // validate

      toastComponent({
        msg: "Usuário ou senha inválidos.",
        type: "error",
        duration: 10000,
      });

      setError("email", {
        message: "Verifique seu e-mail.",
      });
      setError("password", {
        message: "Verifique sua senha.",
      });
      return;
    }

    router.push("/");
  };

  return {
    handleLogin,
    register,
    handleSubmit,
    setShowPassword,
    trigger,
    isLoading,
    isValid,
    showPassword,
    errors,
    dirtyFields,
    hasErrorWithCredentials,
  };
};
