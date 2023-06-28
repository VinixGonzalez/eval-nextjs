import React from "react";
import { Header, Breadcrumb } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../authOptions";
import { MeusImoveisTable } from "@/components/tables";

export default async function MeusImoveisPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
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

          <div className="flex items-center justify-between">
            <input type="search" placeholder="Pesquisar registro" />
            {/* <button>Filtrar</button> */}
          </div>

          <div>
            <MeusImoveisTable />
          </div>
        </section>
      </div>
    </main>
  );
}
