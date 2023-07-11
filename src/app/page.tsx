import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./authOptions";
import Link from "next/link";
import { Plus } from "@/components/icons/ready-to-use";
import { Header } from "@/components";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Header pageLinks="default" />
        <section className="text-center flex flex-col flex-1 items-center justify-center gap-8">
          <h1 className="text-5xl text-purple">Olá, {session.user?.name}</h1>
          <div className="text-2xl text-black">
            <p>Ainda não adicionou nenhum imóvel.</p>
            <p>Clique abaixo para iniciar um estudo de mercado.</p>
          </div>
          <Link
            className="group hover:bg-black flex items-center justify-center gap-3 py-3 px-4 bg-purple text-white rounded-3xl text-base w-44 self-center"
            href="/novo-imovel"
          >
            <span className="group-hover:text-white">Novo imóvel</span>
            <Plus className="group-hover:fill-slate-900" />
          </Link>
        </section>
      </main>
    </>
  );
}
