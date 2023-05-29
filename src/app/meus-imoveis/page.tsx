import React from "react";
import { Header, Breadcrumb } from "@/components";

export default function MeusImoveisPage() {
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
