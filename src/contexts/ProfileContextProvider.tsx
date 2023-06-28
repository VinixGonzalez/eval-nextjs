"use client";

import { ProfileData } from "@/app/profile/page";
import { createContext, useState } from "react";

export const ProfileContext = createContext({});

export const ProfileContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};
