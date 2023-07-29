import React from "react";
import { CardAvaliacaoType } from "./CardAvaliacaoRoot";
import { twMerge } from "tailwind-merge";

export default function CardAvaliacaoValue({
  children,
  type,
}: {
  children: React.ReactNode;
  type: CardAvaliacaoType;
}) {
  const txtColor = {
    pessimista: "text-yellow",
    justo: "text-green",
    desajustado: "text-red",
  };
  return (
    <span className={twMerge(`font-bold text-4xl`, txtColor[type])}>
      {children}
    </span>
  );
}
