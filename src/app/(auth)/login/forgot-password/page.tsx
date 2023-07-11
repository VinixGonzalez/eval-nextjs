import { ForgotPasswordForm } from "@/components/forms";
import React from "react";

export default function ForgotPasswordPage() {
  return (
    <div className="text-black flex flex-col bg-white max-w-md p-10 rounded-3xl">
      <div className="mb-11">
        <h1 className="text-xl font-semibold mb-5">
          Esqueceu-se da sua password?
        </h1>

        <p className="text-xs">
          Por favor insira o seu e-mail abaixo. Irá receber um e-mail com um
          link para definir uma nova password.
        </p>
      </div>

      <ForgotPasswordForm />
    </div>
  );
}
