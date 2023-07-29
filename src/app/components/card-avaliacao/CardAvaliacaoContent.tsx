import React from "react";

export default function CardAvaliacaoContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-2 text-right">{children}</div>;
}
