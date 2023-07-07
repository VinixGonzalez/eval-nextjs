"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import {
  Column,
  ColumnFiltersState,
  FilterFn,
  Table,
  createColumnHelper,
  filterFns,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  AlertRed,
  CheckGreen,
  DeleteTrash,
  Eye,
  EyeClosed,
  Search,
  Print,
  Report,
  Share,
  XClose,
} from "@/app/components/icons/ready-to-use";

import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Imovel } from "@/types/MeusImoveisTableTypes";
import { euro } from "@/utils/currency";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const columnHelper = createColumnHelper<Imovel>();

const columns = [
  columnHelper.accessor("img_url", {
    id: "img_url",
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
    cell: (info) => {
      const value = info.renderValue();
      const valueFormatted = euro.format(value as number);
      return valueFormatted;
    },
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

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

// componente responsável por filtrar a coluna em específico
function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === "number" ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
}

function DebouncedInput({
  onChange,
  globalFilter,
  clearFilter,
  debounce = 500,
  ...props
}: {
  onChange: (value: string | number) => void;
  globalFilter?: string;
  debounce?: number;
  clearFilter?: () => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(globalFilter);

  React.useEffect(() => {
    setValue(globalFilter);
  }, [globalFilter]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value as string);
    }, debounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <InputGroup className="flex items-center w-[536px] max-w-[536px] border border-black rounded-lg p-2 justify-between">
      <InputLeftElement pointerEvents="none">
        <Search />
      </InputLeftElement>
      <input
        placeholder="Pesquisar Rua, Avenida, Praça, Praceta, ID, Valor"
        className="ml-8 w-[456px] outline-none"
        value={globalFilter ?? ""}
        onChange={(value) => onChange(value.target.value)}
        {...props}
      />
      <InputRightElement
        className="cursor-pointer"
        onClick={clearFilter}
        title="Limpar filtro"
      >
        <XClose />
      </InputRightElement>
    </InputGroup>
  );
}

export function MeusImoveisTable({ listaImoveis }: { listaImoveis: Imovel[] }) {
  const [data, setData] = React.useState(() => [...listaImoveis]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <div className="p-2 mt-6">
      <div className="mb-8">
        <DebouncedInput
          globalFilter={globalFilter}
          onChange={(value) => setGlobalFilter(String(value))}
          clearFilter={() => setGlobalFilter("")}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 text-left">
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      {/* Este código abaixo habilita a pesquisa por coluna */}
                      {/* {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null} */}
                    </>
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
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id} className="p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
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
      <div className="flex justify-between gap-2 border-2 border-transparent border-t-gray-100 ">
        <div className="flex items-center  gap-1 text-gray-400 text-xs flex-1">
          <strong>{table.getRowModel().rows.length}</strong> itens
        </div>
        <div className="flex gap-8">
          <div className="flex items-center text-xs text-gray-400 gap-4">
            <span>Itens por página</span>
            <select
              className="border border-gray-100 rounded-lg py-1 px-2"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>

          {/* <span className="flex items-center gap-1">
            <div>Página</div>
            <span>
              {table.getState().pagination.pageIndex + 1} de{" "}
              {table.getPageCount()}
            </span>
          </span>
          <span className="flex items-center gap-1">
            | Ir para a página:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span> */}

          <div className="flex items-center">
            <span className="items-center text-xs text-gray-400">
              {table.getState().pagination.pageIndex + 1} -{" "}
              {table.getPageCount()} páginas
            </span>
          </div>

          <div className="flex ">
            {/* <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button> */}
            <button
              title="Página anterior"
              className={`cursor-pointer h-[54px] w-[54px] border-2 border-t-transparent border-gray-100 text-gray-400 text-gray-400 text-xs`}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              title="Próxima página"
              className="cursor-pointer h-[54px] w-[54px] border-2 border-t-transparent border-l-transparent border-gray-100 text-gray-400 text-xs"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            {/* <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
