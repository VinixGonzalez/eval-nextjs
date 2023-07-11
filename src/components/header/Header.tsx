import React from "react";
import Link from "next/link";
import {
  Report,
  Heart,
  LogoEval,
  Plus,
  Profile,
  XClose,
  LogoEvalNoText,
} from "@/components/icons/ready-to-use";

interface HeaderProps {
  onlyLogo?: boolean;
  pageLinks:
    | "default"
    | "meus-relatorios"
    | "novo-imovel"
    | "perfil"
    | "detalhe-estudo";
}

export const Header: React.FC<HeaderProps> = ({ onlyLogo, pageLinks }) => {
  return (
    <header>
      <nav className="flex py-4 px-36 bg-lightPurple items-center justify-between font-semibold min-h-headerHeight">
        <div className="flex items-center gap-11">
          <Link href="/">
            {onlyLogo ? (
              <LogoEvalNoText />
            ) : (
              <LogoEval width="127" height="42" />
            )}
          </Link>

          {pageLinks === "default" && (
            <>
              <Link
                className="flex items-center gap-3 hover:text-purple"
                href="/meus-imoveis"
              >
                <span>Os meus imóveis</span>
                <Heart />
              </Link>
              <Link
                className="flex items-center gap-3 hover:text-purple"
                href="/meus-relatorios"
              >
                <span>Os meus relatórios</span>
                <Report />
              </Link>
            </>
          )}
          {pageLinks === "meus-relatorios" && <div></div>}
          {pageLinks === "novo-imovel" && (
            <span className="text-xl text-black">Novo imóvel</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {pageLinks === "default" && (
            <>
              <Link
                className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-purple text-white rounded-3xl text-sm"
                href="/novo-imovel"
              >
                <span className="group-hover:text-white">Novo imóvel</span>
                <Plus className="group-hover:fill-slate-900" />
              </Link>
              <Link
                className="flex items-center gap-3 bg-white p-2 rounded-full"
                href="/perfil"
              >
                <Profile />
              </Link>
            </>
          )}
          {pageLinks === "novo-imovel" && (
            <>
              <Link
                className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-purple text-white rounded-3xl text-sm"
                href="/novo-imovel"
              >
                <span className="group-hover:text-white">Submeter</span>
              </Link>
              <Link
                className="group flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-sm"
                href="/novo-imovel"
              >
                <span className="group-hover:text-purple">Cancelar</span>
                <XClose />
              </Link>
              <Link
                className="flex items-center gap-3 bg-white p-2 rounded-full"
                href="/perfil"
              >
                <Profile />
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
