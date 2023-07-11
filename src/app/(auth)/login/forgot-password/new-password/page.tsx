import React from "react";
import NewPasswordForgotForm from "@/app/components/forms/new-password-forgot-form/NewPasswordForgotForm";
import { LogoEval } from "@/app/components/icons/ready-to-use";
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

  const token = searchParams.token as string;
  const formattedToken = token.replaceAll(" ", "+");

  const dataBody = JSON.stringify({
    email: searchParams.email,
    token: formattedToken,
  });

  const res = await fetch(
    "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/resetpasswordtokenvalid",
    {
      method: "POST",
      body: dataBody,
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());

  if (res.status !== 200) {
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
