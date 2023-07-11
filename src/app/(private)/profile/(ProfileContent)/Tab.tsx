import React from "react";
import TemplateView from "../(TemplateView)/TemplateView";
import ProfileView from "../(ProfileView)/ProfileView";
import { ActiveTabEnum } from "./ProfileContent";
import { ProfileData } from "../page";

interface TabProps {
  activeTab: ActiveTabEnum;
  profileData: ProfileData;
  handleActiveTab: (activeTabId: ActiveTabEnum) => void;
}

export const Tab: React.FC<TabProps> = ({
  activeTab,
  profileData,
  handleActiveTab,
}) => {
  const ComponentMap = {
    [ActiveTabEnum.PerfilUtilizador]: <ProfileView profileData={profileData} />,
    [ActiveTabEnum.MeusTemplates]: <TemplateView />,
  };

  return (
    <>
      <div className="bg-lightGrey2 w-max p-2 my-8 rounded-4xl">
        <button
          className={`${
            activeTab === ActiveTabEnum.PerfilUtilizador
              ? "bg-purple text-white"
              : "bg-lightGrey2 text-purple"
          } h-10 px-4 rounded-4xl`}
          onClick={() => handleActiveTab(ActiveTabEnum.PerfilUtilizador)}
        >
          Perfil utilizador
        </button>
        <button
          className={`${
            activeTab === ActiveTabEnum.MeusTemplates
              ? "bg-purple text-white"
              : "bg-lightGrey2 text-purple"
          } h-10 px-4 rounded-4xl`}
          onClick={() => handleActiveTab(ActiveTabEnum.MeusTemplates)}
        >
          Os meus templates
        </button>
      </div>
      {ComponentMap[activeTab]}
    </>
  );
};
