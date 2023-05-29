import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newPasswordForgotSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  });

type NewPasswordForgotData = z.infer<typeof newPasswordForgotSchema>;

export const useNewPasswordForgotFormHelper = ({
  token,
  email,
}: {
  token: string | string[] | undefined;
  email: string | string[] | undefined;
}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<NewPasswordForgotData>({
    resolver: zodResolver(newPasswordForgotSchema),
  });

  // TODO: Tipar form
  const handleChangePassword = async (form: any) => {
    setLoading(true);
    const stringToken = token as string;
    const formattedToken = stringToken.replaceAll(" ", "+");
    const payload = { token: formattedToken, email, password: form.password };
    const dataBody = JSON.stringify(payload);
    const urlDev = "https://localhost:7034/v1/identity/reset-password";
    const urlProd =
      "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/reset-password";
    const res = await fetch(urlDev, {
      method: "POST",
      body: dataBody,
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    if (res.result && res.status === "Ok") {
      // TODO: Trocar para enum
      router.push("/login/forgot-password/new-password/reset-password-success");
    }

    if (res.status === "Erro") {
      // TODO: Trocar para enum e verificar validação
      // setError("email", { type: "value", message: res.alerts[0]?.message });
    }

    setLoading(false);
  };

  return {
    showPassword,
    showConfirmPassword,
    errors,
    dirtyFields,
    isValid,
    loading,
    trigger,
    register,
    handleSubmit,
    setShowPassword,
    setShowConfirmPassword,
    handleChangePassword,
  };
};
