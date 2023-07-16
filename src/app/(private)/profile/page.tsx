import React from "react";
import { Header } from "@/app/components";
// import { ProfileContent } from "./(ProfileContent)/ProfileContent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../authOptions";
import ProfileContent from "./(ProfileContent)/ProfileContent";

export interface ProfileData {
  email: string;
  id: string;
  name: string;
  partner: string;
  partnerId: string;
  phone: string;
}

const getProfileData = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/profile",
      {
        cache: "no-cache",
        headers: {
          Authorization: accessToken,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Bad response from profile service", {
        cause: res,
      });
    }

    const profileData = await res.json();
    return profileData.result;
  } catch (error: any) {
    switch (error.cause?.status) {
      case 400:
        break; // bad
      case 401: // auth
        break;
      case 403:
        break; // forbd
      case 404:
        break; // nfound
      case 500:
        break; // server
    }
  }
};

export default async function PerfilPage() {
  const session = await getServerSession(authOptions);

  const profileData: ProfileData = await getProfileData(
    session?.accessToken as string
  );

  return (
    <main className="min-h-full">
      <Header pageLinks="default" />
      <ProfileContent profileData={profileData} />
    </main>
  );
}
