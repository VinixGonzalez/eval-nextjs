/* eslint-disable @next/next/no-img-element */
import { Header } from "@/app/components";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
import imgDefault from "@/app/components/icons/svgs/ImageThumb.svg";
import { TodasImagensButton } from "./components/TodasImagensButton";
import Link from "next/link";

export interface FotografiaProps {
  id: string;
  name: string;
  url_path: string;
  isMain: boolean;
}

export const MOCK_DATA_DETALHE_IMOVEL = {
  last_update: "22-02-2023",
  morada: "Avenida dos Ferroviários, Pinhal Novo, Portugal",
  tipo: "Apartamento T1",
  estado_imovel: "NOVO",
  area_imovel: "70m2",
  id: "123456",
  valor_imovel: "340000",
  fotografias: [
    {
      id: "1",
      name: "foto 01",
      url_path:
        "https://st.depositphotos.com/1041088/1389/i/450/depositphotos_13894667-stock-photo-beige-large-luxury-house-with.jpg",
      isMain: true,
    },
    {
      id: "2",
      name: "foto 02",
      url_path:
        "https://st2.depositphotos.com/1041088/6081/i/450/depositphotos_60816659-stock-photo-american-house-exterior-with-curb.jpg",
      isMain: false,
    },
    {
      id: "3",
      name: "foto 03",
      url_path:
        "https://st.depositphotos.com/1041088/4723/i/450/depositphotos_47238727-stock-photo-luxury-house-exterior-front-porch.jpg",
      isMain: false,
    },
    {
      id: "4",
      name: "foto 04",
      url_path:
        "https://st4.depositphotos.com/12071432/20989/i/450/depositphotos_209894484-stock-photo-view-modern-house-green-lawn.jpg",
      isMain: false,
    },
    {
      id: "5",
      name: "foto 05",
      url_path:
        "https://st4.depositphotos.com/12071432/20989/i/450/depositphotos_209894284-stock-photo-view-new-modern-house-swimming.jpg",
      isMain: false,
    },
  ],
  localizacao: {
    lat: "123456789",
    long: "123456789",
  },
  valoresEstimados: [
    {
      id: 1,
      tipo_valor: "Valor pessimista",
      valor: "296000",
      valor_metro: "2960",
    },
    {
      id: 2,
      tipo_valor: "Valor justo de mercado",
      valor: "340000",
      valor_metro: "3400",
    },
    {
      id: 3,
      tipo_valor: "Valor desajustado",
      valor: "372000",
      valor_metro: "3720",
    },
  ],
};

export default function DetalheEstudoPage({
  params,
}: {
  params: { id: string };
}) {
  const fetchDetailData = async () => {
    setTimeout(() => {}, 5000);
  };

  let mainImage =
    MOCK_DATA_DETALHE_IMOVEL.fotografias.find((foto) => foto.isMain) ||
    MOCK_DATA_DETALHE_IMOVEL.fotografias[0];
  let otherImages = MOCK_DATA_DETALHE_IMOVEL.fotografias.filter(
    (foto) => foto !== mainImage
  );

  return (
    <main className="min-h-full">
      <Header onlyLogo pageLinks="detalhe-estudo" />
      <ToastContainer />

      <div className="flex flex-col py-6 px-36 h-full gap-9">
        <section id="info-imovel" className="text-black">
          <div className="mb-9">
            <span className="text-xs">
              Última atualização: {MOCK_DATA_DETALHE_IMOVEL.last_update}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold">
                Avenida dos Ferroviários, Pinhal Novo, Portugal
              </span>
              <span className="text-xl font-medium">
                Apartamento T1 - NOVO - 70m2
              </span>
              <span className="text-base font-medium">ID: 123456</span>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <span className="text-darkGrey text-lg font-semibold">
                Valor do imóvel
              </span>
              <span className="text-4xl font-bold">340 000 €</span>
            </div>
          </div>
        </section>
        <section id="fotografias" className="w-full">
          <span>Fotografias</span>

          <div className="flex gap-3 w-full">
            <div className="w-2/4 relative">
              <Link href={`/photos/${mainImage.id}`}>
                <Image
                  alt={mainImage.name}
                  src={mainImage.url_path}
                  width={812}
                  height={450}
                  className="max-h-[450px] rounded-lg"
                />
              </Link>
              <TodasImagensButton />
            </div>
            <div className="w-2/4 flex flex-wrap gap-3 overflow-hidden">
              {otherImages.map((foto, index) => (
                <Link key={foto.name} href={`/photos/${foto.id}`}>
                  <Image
                    key={foto.name}
                    width={393}
                    height={218}
                    alt={foto.name}
                    src={foto.url_path}
                    className="max-h-[218px] rounded-lg"
                  />
                </Link>
              ))}
            </div>

            {/* <div className="w-2/4">

            </div>
            <div className="flex flex-1 flex-wrap gap-3">
              {otherImages.map((foto, index) => (
                <div key={index} className="flex flex-wrap w-2/5">
                  <Image
                    width={326}
                    height={400}
                    alt={foto.name}
                    src={foto.url_path}
                  />
                </div>
              ))}
            </div> */}
          </div>
        </section>
        <section id="localizacao"></section>
        <section id="valores-estimados"></section>
        <section id="detalhes-imovel"></section>
        <section id="caracteristicas-imovel"></section>
        <section id="evolucao-temporal"></section>
        <section id="imoveis-semelhantes-metro-quadrado"></section>
        <section id="segmentos-imoveis-semelhantes-vizinhanca"></section>
        <section id="imoveis-comparaveis"></section>
        <section id="comparacao-imoveis"></section>
        <section id="preco-imoveis-vendidos-a-venda"></section>
        <section id="preco-venda-metro-quadrado"></section>
      </div>
    </main>
  );
}
