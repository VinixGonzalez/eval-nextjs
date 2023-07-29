import React from "react";

export default function CardAvaliacaoSquareMeters({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="font-semibold text-lg text-darkGrey">{children}</span>
  );
}
