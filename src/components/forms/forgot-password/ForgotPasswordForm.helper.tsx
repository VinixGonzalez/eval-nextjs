import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useForgotPasswordFormHelper = () => {
  const router = useRouter();
  const forgetPasswordSchema = z.object({
    email: z
      .string()
      .nonempty("Insira um e-mail para recuperar a password.")
      .email("Formato de e-mail inválido")
      .toLowerCase(),
  });

  type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>;

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
    const urlDev = "https://localhost:7034/v1/identity/forgot-password";
    const urlProd =
      "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/forgot-password";
    const dataBody = JSON.stringify(form);
    const res = await fetch(urlDev, {
      method: "POST",
      body: dataBody,
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    if (res.result && res.status === "Ok") {
      // TODO: Trocar para enum
      router.push("/login/forgot-password/password-email-success");
    }

    if (res.status === "Erro") {
      // TODO: Trocar para enum
      setError("email", { type: "value", message: res.alerts[0]?.message });
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
  };
};
