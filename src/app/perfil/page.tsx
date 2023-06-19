import React from "react";
import { Header } from "@/components";
import { ProfileContent } from "./(ProfileContent)/ProfileContent";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../authOptions";

export default async function PerfilPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
  return (
    <main className="min-h-full">
      <Header pageLinks="default" />
      <ProfileContent />
    </main>
  );
}
