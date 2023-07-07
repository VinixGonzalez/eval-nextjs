"use client";

import { House404, LogoEval } from "@/app/components/icons/ready-to-use";
import React from "react";
import { useRouter } from "next/navigation";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <div className="bg-lightPurple min-h-screen flex flex-col items-center justify-center">
      <LogoEval />

      <div className="flex items-center justify-center">
        <span className="text-purple text-notFoundPage">4</span>
        <House404 width="300" height="237" />
        <span className="text-purple text-notFoundPage">4</span>
      </div>

      <p className="text-xl font-semibold text-center">
        Não encontramos o que procura. <br />
        Por favor tente novamente.
      </p>

      {/* <Link className="text-xs text-purple" href="/">
        Voltar para a homepage
      </Link> */}

      <button
        className="text-xs text-purple mt-8"
        onClick={() => {
          router.back();
        }}
      >
        Voltar para a homepage
      </button>
    </div>
  );
}
