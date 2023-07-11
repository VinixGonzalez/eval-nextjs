import { CheckGreen } from "@/components/icons/ready-to-use";
import Link from "next/link";
import React from "react";

export default function PasswordEmailSuccessPage() {
  return (
    <div className="flex flex-col bg-white p-12 items-center gap-5 rounded-3xl">
      <CheckGreen width="58" height="58" />
      <h1 className="text-xl text-black font-semibold">
        Pedido efectuado com sucesso
      </h1>
      <div className="text-center">
        <p className="text-xs text-black">
          Por favor verifique a sua caixa de email.
        </p>
        <p className="text-xs text-black">
          Caso não tenha recebido por favor verifique a caixa de Spam.
        </p>
      </div>
      <Link href="/login" className="text-purple mt-6 text-xs font-semibold">
        Voltar para a homepage
      </Link>
    </div>
  );
}
