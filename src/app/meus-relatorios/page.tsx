import React from "react";
import { Header, Breadcrumb } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../authOptions";

export default async function MeusRelatoriosPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
  return (
    <main className="min-h-screen flex flex-col">
      <Header pageLinks="default" />
      <Breadcrumb
        crumbList={[
          {
            label: "Os meus Relatórios",
            path: "/meus-relatorios",
            isLast: true,
          },
        ]}
      />
      <section>
        <h1>Meus Relatorios Page</h1>
      </section>
    </main>
  );
}
