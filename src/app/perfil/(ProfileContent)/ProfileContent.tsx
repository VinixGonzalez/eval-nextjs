"use client";

import React, { useState } from "react";
import { ProfileView } from "./(ProfileView)/ProfileView";
import { TemplateView } from "./(TemplatesView)/TemplateView";
import { Breadcrumb } from "@/components";

export const enum ActiveTabEnum {
  PerfilUtilizador,
  MeusTemplates,
}

export const ProfileContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(ActiveTabEnum.PerfilUtilizador);

  const ComponentMap = {
    [ActiveTabEnum.PerfilUtilizador]: <ProfileView />,
    [ActiveTabEnum.MeusTemplates]: <TemplateView />,
  };

  return (
    <>
      <div className="flex flex-col py-6 pl-36 pr-6 h-full">
        <Breadcrumb
          crumbList={[{ label: "Perfil", path: "/perfil", isLast: true }]}
        />
        <div className="bg-lightGrey2 w-max p-2 my-8 rounded-4xl">
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
        {ComponentMap[activeTab]}
      </div>
    </>
  );
};
