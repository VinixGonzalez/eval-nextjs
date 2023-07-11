import { CheckGreen, LogoEval } from "@/app/components/icons/ready-to-use";
import Link from "next/link";
import React from "react";

export default function ResetPasswordSuccessPage() {
  return (
    <div className="flex flex-col">
      <LogoEval className="mb-32 self-center" />
      <div className="max-w-card-reset-password-success bg-lightGreen p-14 flex flex-col items-center justify-center rounded-3xl">
        <CheckGreen className="mb-7" width="58" height="58" />
        <h1 className="block mb-4 text-black text-xl font-semibold">
          Alteração efectuada com sucesso
        </h1>
        <p className="text-xs block mb-11 text-center">
          Sua senha foi alterada com sucesso, agora você já pode efectuar o
          login novamente.
        </p>
        <Link href="/" className="text-purple text-xs">
          Voltar para a homepage
        </Link>
      </div>
    </div>
  );
}
