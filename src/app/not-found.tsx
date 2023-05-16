import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <Link className="bg-red-700 text-white p-4 m-4 rounded" href="/login">
      404 - A página requisitada não existe! Voltar
    </Link>
  );
}
