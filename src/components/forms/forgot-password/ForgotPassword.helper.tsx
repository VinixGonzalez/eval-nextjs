import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useForgotPasswordHelper = () => {
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
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const handleRecoverPassword = () => {};

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
