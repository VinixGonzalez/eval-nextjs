import { euro } from "@/utils/currency";
import React from "react";
import { CheckGreen, Info } from "../icons/ready-to-use";
import CardAvaliacaoIcon from "./CardAvaliacaoIcon";
import CardAvaliacaoText from "./CardAvaliacaoText";
import { twMerge } from "tailwind-merge";

export type CardAvaliacaoType = "pessimista" | "justo" | "desajustado";

interface CardAvaliacaoProps {
  type: "pessimista" | "justo" | "desajustado";
  value: string;
  squareMeters: string;
}

interface CardAvaliacaoRootProps {
  children: React.ReactNode;
  type: CardAvaliacaoType;
}

export default function CardAvaliacaoRoot({
  children,
  type,
}: CardAvaliacaoRootProps) {
  const BgType = {
    pessimista: "bg-lightYellow",
    justo: "bg-lightGreen",
    desajustado: "bg-lightRed",
  };

  return (
    <div
      className={twMerge(
        "flex-1 rounded-lg flex justify-between p-6",
        BgType[type]
      )}
    >
      {children}
    </div>
  );
}
