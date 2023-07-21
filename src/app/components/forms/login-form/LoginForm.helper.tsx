"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { toastComponent } from "@/app/components/toast/Toast";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("Formato de e-mail inválido.")
    .toLowerCase(),
  password: z.string().nonempty("A senha é obrigatória."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginFormHelper = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [hasErrorWithCredentials, setHasErrorWithCredentials] = useState(false);

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
    debugger;
    setIsLoading(true);
    const signInResponse = await signIn("credentials", {
      ...form,
      redirect: false,
      callbackUrl: `${
        new URLSearchParams(window.location.search).get("callbackUrl") ?? "/"
      }`,
    });
    setIsLoading(false);

    if (signInResponse && signInResponse.error) {
      // validate

      console.log("erro");
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

    console.log("Redirecionado para a HOME");
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
