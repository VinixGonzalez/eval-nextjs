import React from "react";
import { Header, Breadcrumb } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../authOptions";

export default async function NovoImovelPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
  return (
    <main className="min-h-full">
      <Header pageLinks="novo-imovel" />

      <div className="py-6 pl-36 pr-6 grid grid-cols-2 h-full">
        <section id="content">
          <Breadcrumb
            crumbList={[
              { label: "Novo Imóvel", path: "/novo-imovel", isLast: true },
            ]}
          />
        </section>
        <section id="map">
          <div className="bg-lightPurple flex flex-col w-full min-h-half">
            <div className="flex-1 h-full">map</div>
          </div>
        </section>
      </div>
    </main>
  );
}
