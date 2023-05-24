import NewPasswordForgotForm from "@/components/forms/new-password-forgot-form/NewPasswordForgotForm";
import { LogoEval } from "@/components/icons/ready-to-use";
import React from "react";

export default function NewPasswordPage({
  params,
  searchParams,
}: {
  params: { param: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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
