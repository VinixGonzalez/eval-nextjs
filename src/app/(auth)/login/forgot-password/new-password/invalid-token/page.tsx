import { AlertRed, LogoEval } from "@/components/icons/ready-to-use";
import Link from "next/link";

export default function InvalidTokenPage() {
  return (
    <div className="flex flex-col">
      <LogoEval className="mb-24 self-center" />
      <div className="max-w-card-reset-password-success bg-lightRed p-14 flex flex-col items-center justify-center rounded-3xl">
        <AlertRed className="mb-7" width="58" height="58" />
        <h1 className="block mb-4 text-black text-xl font-semibold">
          O token informado está expirado
        </h1>
        <p className="text-xs block mb-11 text-center">
          Por favor, refaça o processo de recuperação de senha.
        </p>
        <Link href="/login/forgot-password" className="text-red text-xs">
          Voltar para a recuperação de senha
        </Link>
      </div>
    </div>
  );
}
