import { Header } from "@/components";
import { Breadcrumb } from "@/components/breadcrumb";
import React from "react";

export default function MeusRelatoriosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header onlyLogo pageLinks="meus-relatorios" />
      <Breadcrumb
        crumbList={[
          { label: "Meus Relatórios", path: "/meus-relatorios", isLast: true },
        ]}
      />
      <section>
        <h1>Meus Relatorios Page</h1>
      </section>
    </main>
  );
}
