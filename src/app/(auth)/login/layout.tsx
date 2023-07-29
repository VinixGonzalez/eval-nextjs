import React from "react";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/authOptions";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const session = await getServerSession(authOptions);
  const pathname = headersList.get("x-invoke-path") || "";
  if (session && pathname.startsWith("/login")) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-lightPurple flex items-center justify-center">
      {children}
    </div>
  );
}
