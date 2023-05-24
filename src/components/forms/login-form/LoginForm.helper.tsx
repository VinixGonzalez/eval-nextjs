import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  password: z.string().nonempty("A senha é obrigatória"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginFormHelper = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasErrorWithCredentials, setHasErrorWithCredentials] = useState(false);

  useEffect(() => {
    const searchParams = window.location.search;
    const hasError = searchParams.includes("error=wrong-credentials");
    if (hasError) {
      setHasErrorWithCredentials(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    trigger,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (form: any) => {
    await signIn("credentials", { ...form });
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
    hasErrorWithCredentials,
  };
};
