import React from "react";
import { Header, Breadcrumb } from "@/components";

export default function MeusRelatoriosPage() {
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
