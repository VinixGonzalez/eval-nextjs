"use client";

import { toastComponent } from "@/app/components/toast/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const changePasswordSchema = z
  .object({
    oldPassword: z.string().nonempty("Insira sua password atual."),
    newPassword: z
      .string()
      .nonempty("A senha é obrigatória.")
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .refine((password) => /[A-Z]/.test(password), {
        message: "A senha deve ter pelo menos 1 caractere maiúsculo.",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "A senha deve ter pelo menos 1 número.",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "A senha deve ter pelo menos 1 caractere minúsculo.",
      })
      .refine((password) => /\W|_/.test(password), {
        message: "A senha deve ter pelo menos 1 caractere especial.",
      }),
    confirmPassword: z
      .string()
      .nonempty("A confirmação de senha é obrigatória.")
      .min(8, "A confirmação de senha deve ter no mínimo 8 caracteres.")
      .refine((confirmPassword) => /[A-Z]/.test(confirmPassword), {
        message:
          "A confirmação de senha deve ter pelo menos 1 caractere maiúsculo.",
      })
      .refine((confirmPassword) => /[0-9]/.test(confirmPassword), {
        message: "A confirmação de senha deve ter pelo menos 1 número.",
      })
      .refine((confirmPassword) => /[a-z]/.test(confirmPassword), {
        message:
          "A confirmação de senha deve ter pelo menos 1 caractere minúsculo.",
      })
      .refine((confirmPassword) => /\W|_/.test(confirmPassword), {
        message:
          "A confirmação de senha deve ter pelo menos 1 caractere especial.",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  });

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export const useChangePasswordFormHelper = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const handleChangePassword = async (form: ChangePasswordFormData) => {
    setIsLoading(true);

    const payload = { email: session?.user?.email, ...form };
    const dataBody = JSON.stringify(payload);

    const res = await fetch(
      "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/change-password",
      {
        method: "POST",
        body: dataBody,
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.accessToken as string,
        },
      }
    ).then((res) => res.json());

    setIsLoading(false);

    if (res.status === 401) {
      toastComponent({
        msg: "Token expirado, redirecionando para o login.",
        type: "error",
        duration: 5000,
      });
      signOut();
      // router.replace("/login");
      return;
    }

    if (res.status === 400) {
      setError("oldPassword", {
        message: "Verifique sua senha.",
      });
      toastComponent({
        msg: "Verifique a senha informada.",
        type: "error",
        duration: 10000,
      });

      return;
    }

    toastComponent({
      msg: "Password alterada com sucesso!",
      type: "success",
    });

    closeModal();
  };

  return {
    register,
    handleSubmit,
    setShowPassword,
    setShowConfirmPassword,
    handleChangePassword,
    trigger,
    isLoading,
    errors,
    dirtyFields,
    isValid,
    showPassword,
    showConfirmPassword,
  };
};
