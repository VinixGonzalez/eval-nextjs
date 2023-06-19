import React from "react";
import NewPasswordForgotForm from "@/components/forms/new-password-forgot-form/NewPasswordForgotForm";
import { LogoEval } from "@/components/icons/ready-to-use";
import { redirect } from "next/navigation";

export default async function NewPasswordPage({
  params,
  searchParams,
}: {
  params: { param: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams.token) {
    redirect("/");
  }

  const dataBody = JSON.stringify({
    email: searchParams.email,
    token: searchParams.token,
  });

  const res = await fetch(
    "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/resetpasswordtokenvalid",
    {
      method: "POST",
      body: dataBody,
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());

  // TODO: Verificar a questão do CORS com o denner e trocar por !res.ok para fazer o redirect
  if (!res.ok) {
    // setTimeout(() => {
    //   toastComponent({
    //     msg: "O Token fornecido já expirou, por favor refaça o processo de recuperação de senha.",
    //     type: "error",
    //     duration: 7000,
    //   });
    // }, 8000);
    redirect("/login/forgot-password/new-password/invalid-token");
  }

  return (
    <>
      <LogoEval className="mb-14 self-center" />
      <NewPasswordForgotForm
        token={searchParams.token}
        email={searchParams.email}
      />
    </>
  );
}
