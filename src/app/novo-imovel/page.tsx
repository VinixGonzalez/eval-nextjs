import { Header } from "@/components";
import { Breadcrumb } from "@/components/breadcrumb";
import React from "react";

export default function NovoImovelPage() {
  return (
    <main>
      <Header onlyLogo pageLinks="default" />
      <Breadcrumb
        crumbList={[
          { label: "Novo Imóvel", path: "/novo-imovel", isLast: true },
        ]}
      />
      <section></section>
    </main>
  );
}
