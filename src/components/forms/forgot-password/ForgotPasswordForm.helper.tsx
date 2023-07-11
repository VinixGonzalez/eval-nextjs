import { toastComponent } from "@/components/toast/Toast";
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
      "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/forgot-password";
    const dataBody = JSON.stringify(form);
    const res = await fetch(urlProd, {
      method: "POST",
      body: dataBody,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .finally(() => {
        setIsLoading(false);
      });

    if (res.result && res.status === "200") {
      // TODO: Trocar para enum
      router.push("/login/forgot-password/password-email-success");
    }

    if (res.statusCode === "Erro" || res.statusCode === "400") {
      // TODO: Trocar para enum
      setError("email", {
        type: "value",
      });

      toastComponent({
        msg: res.alerts[0]?.message.messageDescription,
        type: "error",
        align: "horizontal",
      });
    }
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
