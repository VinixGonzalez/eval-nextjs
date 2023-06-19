"use client";

import React from "react";
import toast from "react-hot-toast";
import { CheckGreen, Info, XClose, XCloseBg } from "../icons/ready-to-use";

type ToastTypes = "info" | "success" | "error" | "warning";

export function toastComponent({
  msg,
  type,
  duration = 6000,
  align = "horizontal",
}: {
  msg: string;
  type: ToastTypes;
  duration?: number;
  align?: "horizontal" | "vertical";
}) {
  const colorType = () => {
    if (type === "error") return `bg-lightRed`;
    if (type === "info") return `bg-lightPurple`;
    if (type === "success") return `bg-lightGreen`;
    if (type === "warning") return `bg-lightYellow`;
  };
  const closeColor = () => {
    const colorMap = {
      success: "#004801",
      error: "#BE1E2D",
      info: "#591EE5",
      warning: "#0E0D14",
    };

    return colorMap[type];
  };
  const renderIcon = () => {
    const iconMap = {
      success: <CheckGreen />,
      error: <XCloseBg fillList={["#BE1E2D", "#FDEFED"]} />,
      info: <Info fillList={["#591ee5", "#f1e8fb", "#f1e8fb"]} />,
      warning: <Info fillList={["#fbbd08", "#f1e8fb", "#f1e8fb"]} />,
    };
    return iconMap[type];
  };
  const renderText = () => {
    const textMap = {
      success: (
        <>
          <p className="text-darkGreen font-semibold text-sm">
            Notificação de sucesso
          </p>
          <p className="text-darkGreen text-sm">{msg}</p>
        </>
      ),
      error: (
        <>
          <p className="text-red font-semibold text-sm">Notificação de erro</p>
          <p className="text-red text-sm">{msg}</p>
        </>
      ),
      info: (
        <>
          <p className="text-purple font-semibold text-sm">
            Notificação de informação
          </p>
          <p className="text-purple text-sm">{msg}</p>
        </>
      ),
      warning: (
        <>
          <p className="text-black font-semibold text-sm">
            Notificação de aviso
          </p>
          <p className="text-black text-sm">{msg}</p>
        </>
      ),
    };
    return textMap[type];
  };

  return toast.custom(
    (t) => (
      <div className={`flex items-center p-6 gap-6 rounded-xl ${colorType()}`}>
        {renderIcon()}
        <div
          className={`${
            align === "horizontal" ? "flex-row" : "flex-col"
          } flex gap-3`}
        >
          {renderText()}
        </div>
        <XClose
          style={{ cursor: "pointer" }}
          fill={`${closeColor()}`}
          height="12"
          width="12"
        />
      </div>
    ),
    { duration: duration }
  );
}
