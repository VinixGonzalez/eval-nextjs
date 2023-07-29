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
  Edit,
  Update,
  DeleteTrash,
  Print,
  Share,
  XCloseBg,
} from "@/app/components/icons/ready-to-use";
import { HistoricoMenu } from "./HistoricoMenu";

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
          {pageLinks === "detalhe-estudo" && (
            <div className="flex">
              <div className="flex gap-5">
                <Link
                  className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-xs"
                  href="#"
                >
                  <span className="group-hover:text-white">
                    Criar relatório
                  </span>
                  <Plus
                    className="group-hover:fill-slate-900"
                    height="20"
                    width="20"
                  />
                </Link>
                <Link
                  className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-xs"
                  href="#"
                >
                  <Report
                    className="group-hover:fill-slate-900"
                    fillList={["#F1E8FB", "#591ee5", "#591ee5", "#591ee5"]}
                    height="20"
                    width="20"
                  />
                  <span className="group-hover:text-white">
                    Relatórios criados
                  </span>
                  <Plus // TODO: Pedir icone de dropdown menu
                    className="group-hover:fill-slate-900"
                    height="20"
                    width="20"
                  />
                </Link>
                <Link
                  className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-xs"
                  href="#"
                >
                  <span className="group-hover:text-white">
                    Editar relatório
                  </span>
                  <Edit className="group-hover:fill-slate-900" />
                </Link>
                <Link
                  className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-xs"
                  href="#"
                >
                  <span className="group-hover:text-white">
                    Atualizar estudo
                  </span>
                  <Update
                    className="group-hover:fill-slate-900"
                    height="12"
                    width="12"
                  />
                </Link>
                <HistoricoMenu />
              </div>
            </div>
          )}
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
                href="/profile"
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
                href="/profile"
              >
                <Profile />
              </Link>
            </>
          )}
          {pageLinks === "detalhe-estudo" && (
            <div className="flex gap-10 text-xs font-semibold text-purple">
              <div className="flex items-center gap-2">
                <span>Imprimir</span>
                <Print
                  title="Imprimir"
                  className="cursor-pointer"
                  fillList={["#591ee5", "#fff", "#591ee5"]}
                  width="20"
                  height="18"
                />
              </div>
              <div className="flex items-center gap-2">
                <span>Compartilhar</span>
                <Share
                  title="Compartilhar"
                  className="cursor-pointer"
                  fillList={["#fff", "#fff", "#591ee5", "#591ee5", "#591ee5"]}
                  width="20"
                  height="18"
                />
              </div>
              <div className="flex items-center gap-2">
                <span>Eliminar</span>
                <DeleteTrash
                  title="Eliminar"
                  className="cursor-pointer"
                  fillList={["#fff", "#591ee5", "#591ee5"]}
                  width="20"
                  height="18"
                />
              </div>
              <div className="flex items-center gap-2">
                <span>Fechar</span>
                <XCloseBg
                  className="cursor-pointer"
                  fillList={["#fff", "#591ee5", "#591ee5"]}
                  width="20"
                  height="18"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
