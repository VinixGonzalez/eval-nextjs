"use client";

import React, { useState } from "react";
import imgDefault from "./ImageThumb.jpg";
import Image from "next/image";
import { ChangePasswordForm } from "@/components/forms";

const enum ActiveTabEnum {
  PerfilUtilizador,
  MeusTemplates,
}

export const ProfileContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(ActiveTabEnum.PerfilUtilizador);

  return (
    <div className="flex flex-col py-6 pl-36 pr-6 h-full">
      <div className="bg-lightGrey2 w-max p-2 mb-8 rounded-4xl">
        <button
          className={`${
            activeTab === ActiveTabEnum.PerfilUtilizador
              ? "bg-purple text-white"
              : "bg-lightGrey2 text-purple"
          } h-10 px-4 rounded-4xl`}
          onClick={() => setActiveTab(ActiveTabEnum.PerfilUtilizador)}
        >
          Perfil utilizador
        </button>
        <button
          className={`${
            activeTab === ActiveTabEnum.MeusTemplates
              ? "bg-purple text-white"
              : "bg-lightGrey2 text-purple"
          } h-10 px-4 rounded-4xl`}
          onClick={() => setActiveTab(ActiveTabEnum.MeusTemplates)}
        >
          Os meus templates
        </button>
      </div>

      <div className="flex flex-col justify-between max-w-xl rounded-xl border border-lightGrey p-8">
        <div className="flex justify-between">
          <span className="text-xl">Dados pessoais</span>

          <button
            className="flex flex-col justify-center items-center"
            onClick={() => {}}
          >
            <Image
              // src="../../../components/icons/svgs/ImageThumb.svg"
              src={imgDefault}
              alt="Imagem default"
              width="93"
              height="93"
              className="mb-2"
            />
            <span className="text-xs text-purple">Mudar foto</span>
          </button>
        </div>

        <ChangePasswordForm />
      </div>
    </div>
  );
};
