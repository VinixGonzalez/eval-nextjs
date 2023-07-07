import React from "react";
import { Header, Breadcrumb } from "@/app/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../authOptions";
import { MeusImoveisTable } from "@/app/components/tables";

export type Imovel = {
  img_url: string;
  id: string;
  morada: string;
  valor: number;
  data: string;
  actions: string;
};

const listaImoveis: Imovel[] = [
  {
    img_url:
      "https://st.depositphotos.com/1041088/1388/i/450/depositphotos_13888437-stock-photo-large-classic-american-house-with.jpg",
    id: "12345",
    morada: "Av Defensores de Chaves, Lisboa - 1000.",
    valor: 240000,
    data: "15-05-2023",
    actions: "",
  },
  {
    img_url:
      "https://st4.depositphotos.com/12071432/20989/i/450/depositphotos_209894284-stock-photo-view-new-modern-house-swimming.jpg",
    id: "123456",
    morada: "Rua Presidente Prudente - 200",
    valor: 400000,
    data: "29-03-2023",
    actions: "",
  },
  {
    img_url:
      "https://st.depositphotos.com/2484583/2771/i/450/depositphotos_27712873-stock-photo-classic-house.jpg",
    id: "54123",
    morada: "Praça Antônio Passarela, 15",
    valor: 450000,
    data: "22-01-2023",
    actions: "",
  },
  {
    img_url:
      "https://st.depositphotos.com/2484583/2771/i/450/depositphotos_27712873-stock-photo-classic-house.jpg",
    id: "54123",
    morada: "Praça Antônio Passarela, 15",
    valor: 450000,
    data: "22-01-2023",
    actions: "",
  },
  {
    img_url:
      "https://st.depositphotos.com/2484583/2771/i/450/depositphotos_27712873-stock-photo-classic-house.jpg",
    id: "54123",
    morada: "Praça Antônio Passarela, 15",
    valor: 450000,
    data: "22-01-2023",
    actions: "",
  },
  {
    img_url:
      "https://st.depositphotos.com/2484583/2771/i/450/depositphotos_27712873-stock-photo-classic-house.jpg",
    id: "54123",
    morada: "Praça Antônio Passarela, 15",
    valor: 450000,
    data: "22-01-2023",
    actions: "",
  },
];

export default async function MeusImoveisPage() {
  return (
    <main className="min-h-full">
      <Header pageLinks="default" />

      <div className="py-6 px-36 h-full">
        <section id="content">
          <Breadcrumb
            crumbList={[
              { label: "Os Meus Imóveis", path: "/meus-imoveis", isLast: true },
            ]}
          />

          <MeusImoveisTable listaImoveis={listaImoveis} />
        </section>
      </div>
    </main>
  );
}
