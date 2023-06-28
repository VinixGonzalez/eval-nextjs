"use client";

import React from "react";
import Image from "next/image";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  CheckGreen,
  DeleteTrash,
  Print,
  Report,
  Share,
} from "@/components/icons/ready-to-use";

type Imovel = {
  image_url: string;
  id: string;
  morada: string;
  valor: number;
  data: string;
  actions: string;
};

const defaultData: Imovel[] = [
  {
    image_url:
      "https://st.depositphotos.com/1041088/1388/i/450/depositphotos_13888437-stock-photo-large-classic-american-house-with.jpg",
    id: "12345",
    morada: "Av Defensores de Chaves, Lisboa - 1000.",
    valor: 240000,
    data: "15-05-2023",
    actions: "",
  },
  {
    image_url:
      "https://st4.depositphotos.com/12071432/20989/i/450/depositphotos_209894284-stock-photo-view-new-modern-house-swimming.jpg",
    id: "123456",
    morada: "Av Defensores de Chaves, Lisboa - 1000.",
    valor: 400000,
    data: "15-05-2023",
    actions: "",
  },
  {
    image_url:
      "https://st.depositphotos.com/2484583/2771/i/450/depositphotos_27712873-stock-photo-classic-house.jpg",
    id: "54123",
    morada: "Av Defensores de Chaves, Lisboa - 1000.",
    valor: 450000,
    data: "15-05-2023",
    actions: "",
  },
];

const columnHelper = createColumnHelper<Imovel>();

const columns = [
  columnHelper.accessor("image_url", {
    id: "image_url",
    header: "",
    cell: (info) => (
      <Image
        src={info.getValue()}
        width="60"
        height="60"
        alt="imovel"
        className="rounded-lg"
      />
    ),
  }),
  columnHelper.accessor((row) => row.id, {
    id: "id",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>ID</span>,
  }),
  columnHelper.accessor((row) => row.morada, {
    id: "morada",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Morada</span>,
  }),
  columnHelper.accessor("valor", {
    id: "valor",
    header: () => "Valor",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("data", {
    id: "data",
    header: () => "Data",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("actions", {
    header: () => "Ações",
    cell: (info) => (
      <div className="flex gap-4">
        <Report
          className="cursor-pointer"
          title="Relatório"
          fillList={["#F1E8FB", "#591EE5", "#591EE5"]}
        />
        <Share title="Compartilhar" className="cursor-pointer" />
        <Print title="Imprimir" className="cursor-pointer" />
        <DeleteTrash title="Eliminar" className="cursor-pointer" />
      </div>
    ),
  }),
];

export function MeusImoveisTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="min-w-full bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={`border-t-2 border-gray-100 hover:bg-fuchsia-50 ${
                index % 2 === 0 ? "bg-white" : "bg-lightnessPurple"
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
}
