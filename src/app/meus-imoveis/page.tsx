import { Header } from "@/components";
import { Breadcrumb } from "@/components/breadcrumb";
import React from "react";

export default function MeusImoveisPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header onlyLogo pageLinks="default" />
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
