import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { ErrorStatusCodesEnum } from "@/app/authOptions";
import { toastComponent } from "@/components/toast/Toast";

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

    const hasError =
      searchParams.includes(ErrorStatusCodesEnum.WrongCredentials) ||
      searchParams.includes(ErrorStatusCodesEnum.UserBlockedManyLoginTries) ||
      searchParams.includes(ErrorStatusCodesEnum.UserNotFoundByEmail) ||
      searchParams.includes(ErrorStatusCodesEnum.MinCharPassword);
    if (hasError) {
      setHasErrorWithCredentials(true);

      if (searchParams.includes(ErrorStatusCodesEnum.WrongCredentials)) {
        toastComponent({
          msg: "Usuário ou senha estão incorretos.",
          type: "error",
          align: "horizontal",
        });
      }
      if (
        searchParams.includes(ErrorStatusCodesEnum.UserBlockedManyLoginTries)
      ) {
        toastComponent({
          msg: "Usuário bloqueado temporariamente por tentativas inválidas.",
          type: "error",
        });
      }
      if (searchParams.includes(ErrorStatusCodesEnum.UserNotFoundByEmail)) {
        toastComponent({
          msg: "Não foi possível localizar o Usuário pelo E-mail informado.",
          type: "error",
        });
      }
      if (searchParams.includes(ErrorStatusCodesEnum.MinCharPassword)) {
        toastComponent({
          msg: "O valor mínimo permitido é de 8 caracteres",
          type: "error",
        });
      }
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

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (form: any) => {
    setIsLoading(true);
    await signIn("credentials", {
      ...form,
    });
    setIsLoading(false);
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
