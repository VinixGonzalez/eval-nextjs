import { toastComponent } from "@/app/components/toast/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgetPasswordSchema = z.object({
  email: z
    .string()
    .nonempty("Insira um e-mail para recuperar a password.")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
});

type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>;

export const useForgotPasswordFormHelper = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const handleRecoverPassword = async (form: any) => {
    setIsLoading(true);
    const urlDev = "https://localhost:7034/v1/identity/forgot-password";
    const urlProd =
      "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/forgot-password";
    const dataBody = JSON.stringify(form);
    await fetch(urlProd, {
      method: "POST",
      body: dataBody,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res !== undefined) return res.json();
        return null;
      })
      .finally(() => {
        setIsLoading(false);
      });

    router.push("/login/forgot-password/password-email-success");
  };

  return {
    register,
    handleSubmit,
    trigger,
    handleRecoverPassword,
    errors,
    dirtyFields,
    isValid,
    isLoading,
  };
};
