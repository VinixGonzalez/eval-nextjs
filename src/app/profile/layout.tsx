import { ProfileContextProvider } from "@/contexts/ProfileContextProvider";

export const metadata = {
  title: "Profile",
  description: "Profile Page - EVAL",
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileContextProvider>{children}</ProfileContextProvider>;
}
