import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const changePasswordSchema = z.object({
  currentPassword: z.string().nonempty("Insira sua password atual."),
  password: z
    .string()
    .nonempty("A senha é obrigatória.")
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .refine((password) => /[A-Z]/.test(password), {
      message: "A senha deve ter pelo menos 1 caractere maiúsculo",
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
        "A confirmação de senha deve ter pelo menos 1 caractere maiúsculo",
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
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export const useChangePasswordFormHelper = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const handleChangePassword = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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
