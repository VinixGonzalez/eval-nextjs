import React from "react";
import { CardAvaliacaoType } from "./CardAvaliacaoRoot";

export default function CardAvaliacaoText({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className={`font-semibold text-lg`}>{children}</span>;
}
