import React from "react";
import { CardAvaliacaoType } from "./CardAvaliacaoRoot";
import { Info, CheckGreen, XClose } from "../icons/ready-to-use";

export default function CardAvaliacaoIcon({
  type,
}: {
  type: CardAvaliacaoType;
}) {
  const IconMap = {
    pessimista: (
      <Info
        fillList={["#FEF2CD", "#FBBD08", "#FBBD08"]}
        width="46"
        height="46"
      />
    ),
    justo: (
      <CheckGreen
        //   fillList={["#FEF2CD", "#FBBD08", "#FBBD08"]}
        width="46"
        height="46"
      />
    ),
    desajustado: <XClose fill="#ff0000" width="46" height="46" />,
  };

  return (
    <div>
      <div className="rounded-full border-4 border-white">{IconMap[type]}</div>
    </div>
  );
}
