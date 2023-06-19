import React from "react";
import { Header, Breadcrumb } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../authOptions";

export default async function MeusImoveisPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
  return (
    <main className="min-h-screen flex flex-col">
      <Header pageLinks="default" />
      <Breadcrumb
        crumbList={[
          { label: "Meus Imóveis", path: "/meus-imoveis", isLast: true },
        ]}
      />
      <section>
        <h1>Meus Imoveis Page</h1>
      </section>
    </main>
  );
}
