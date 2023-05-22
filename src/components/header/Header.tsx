import React from "react";
import Link from "next/link";
import { Alert, Eye, LogoEval, Plus } from "@/components/icons/ready-to-use";

interface HeaderProps {
  onlyLogo?: boolean;
  pageLinks: "default" | "meus-relatorios" | "novo-imovel" | "perfil";
}

export const Header: React.FC<HeaderProps> = ({ onlyLogo, pageLinks }) => {
  return (
    <header>
      <nav className="flex py-4 px-36 bg-lightPurple items-center justify-between font-semibold">
        <div className="flex items-center gap-11">
          <Link href="/">
            {onlyLogo ? (
              <LogoEval width="127" height="42" /> // TODO: trocar pelo icone sem texto
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
                <Alert width="18" height="18" />
              </Link>
              <Link
                className="flex items-center gap-3 hover:text-purple"
                href="/meus-relatorios"
              >
                <span>Os meus relatórios</span>
                <Alert width="18" height="18" />
              </Link>
            </>
          )}

          {pageLinks === "meus-relatorios" && <div></div>}
        </div>

        <div className="flex items-center gap-3">
          <Link
            className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-purple text-white rounded-3xl text-sm"
            href="/novo-imovel"
          >
            <span className="group-hover:text-white">Novo imóvel</span>
            <Plus className="group-hover:fill-slate-900" />
          </Link>
          <Link className="flex items-center gap-3" href="/perfil">
            <Alert width="18" height="18" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
