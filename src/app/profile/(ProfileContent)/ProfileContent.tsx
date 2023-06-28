"use client";

import React, { useState } from "react";
import { Tab } from "./Tab";
import { Breadcrumb } from "@/components";
import { ProfileData } from "../page";

export const enum ActiveTabEnum {
  PerfilUtilizador,
  MeusTemplates,
}

export default function ProfileContent({
  profileData,
}: {
  profileData: ProfileData;
}) {
  const [activeTab, setActiveTab] = useState(ActiveTabEnum.PerfilUtilizador);

  return (
    <div className="flex flex-col py-6 pl-36 pr-6 h-full">
      <Breadcrumb
        crumbList={[{ label: "Perfil", path: "/perfil", isLast: true }]}
      />
      <Tab
        handleActiveTab={(activeTab: ActiveTabEnum) => setActiveTab(activeTab)}
        activeTab={activeTab}
        profileData={profileData}
      />
    </div>
  );
}
