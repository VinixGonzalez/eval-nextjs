import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useLoginFormHelper = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = z.object({
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato de e-mail inválido")
      .toLowerCase(),
    password: z.string().nonempty("A senha é obrigatória"),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = () => {
    debugger;
  };

  return {
    handleLogin,
    register,
    handleSubmit,
    setShowPassword,
    trigger,
    isValid,
    showPassword,
    errors,
    dirtyFields,
  };
};
