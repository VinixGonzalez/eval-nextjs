import React from "react";
import { Header } from "@/components";
// import { ProfileContent } from "./(ProfileContent)/ProfileContent";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../authOptions";
import { SkeletonProfileView } from "@/components/skeletons";
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
        cache: "force-cache",
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
    switch (error.cause.res?.status) {
      case 400:
        break; // bad
      case 401:
        break; // auth
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
  if (!session) return redirect("/login");

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
